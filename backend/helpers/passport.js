const LocalStrategy = require('passport-local').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;

const db = require('../dataBase').getInstance();
const {AUTH_FACEBOOK} = require('../constantas');
const {passwordHasher} = require('../helpers');

module.exports = function (passport) {
    const UserModel = db.getModel('User');
    const OAuthModel = db.getModel('OAuthToken');

    passport.serializeUser(function (user, done) {
        done(null, user.id)
    });

    passport.deserializeUser(function (id, done) {
        UserModel.findByPk(id, function (err, user) {
            done(err, user)
        });
    });

    passport.use('local-register', new LocalStrategy({
            usernameField: 'email',
            passwordField: 'password',
            passReqToCallback: true
        },
        function (req, email, password, done) {
            process.nextTick(function () {
                UserModel.findOne({'local.username': email}, function (err, user) {
                    if (err)
                        return done(err);
                    if (user) {
                        return done(null, false, req.flash('signupMessage', 'That email already taken'))
                    } else {
                        let newUser = new UserModel();
                        newUser.local.username = email;
                        newUser.local.password = passwordHasher.hashPassword(password);

                        newUser.create(() => {
                         return done(null, newUser)
                        })
                    }
                })
            })
        }));
    passport.use('local-login', new LocalStrategy({
            usernameField: 'email',
            passwordField: 'password',
            passReqToCallback: true
        },
        function (req, email, password, done) {
            process.nextTick(function () {
                UserModel.findOne({'local.username': email}, function (err, user) {
                    if (err)
                        return done(err);
                    if (!user)
                        return done(null, false, req.flash('loginMessage', 'No User found'));
                    return done(null, user);

                });
            });
        }
    ));


    passport.use(new FacebookStrategy({
            clientID: AUTH_FACEBOOK.facebookAuth.clientID,
            clientSecret: AUTH_FACEBOOK.facebookAuth.clientSecret,
            callbackURL: AUTH_FACEBOOK.facebookAuth.callbackURL,
        },
        function (access_token, profile, done) {
            process.nextTick(function () {
                UserModel.findOne({'facebook.id': profile.id}, function (err, user) {
                    if (err)
                        return done(err);
                    if (user)
                        return done(null, user);
                    else {
                        let newUser = new UserModel();
                        let newToken = new OAuthModel();
                        newUser.id = profile.id;
                        newToken.token = access_token;
                        newUser.name = profile.name.givenName + ' ' + profile.name.familyName;
                        newUser.email = profile.emails[0].value;

                        newUser.create(function (err) {
                            if (err)
                                throw err;
                            return done(null, newUser);
                        });
                        console.log(profile);
                    }
                });
            });
        }
    ));


};
