const router = require('express').Router();

const {userController} = require('../../controller');

module.exports = function (passport) {

    router.post('/register', userController.register);

    router.post('/register', passport.authenticate('local-register', {
        successRedirect: '/profile',
        failureRedirect: '/register',
        failureFlash: true
    }));

    router.post('/login', userController.loginUser);

    router.post('/login', passport.authenticate('local-login', {
        successRedirect: '/',
        failureRedirect: '/login',
        failureFlash: true
    }));

    router.get('/auth/facebook', passport.authenticate('facebook', {scope: ['email']}));

    router.get('/auth/facebook/callback',
        passport.authenticate('facebook', {
            successRedirect: '/profile',
            failureRedirect: '/'
        }));


    router.get('/:id', userController.loginUser);
};


module.exports = router;
