const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const passport = require('passport');
const flash = require('connect-flash');
const app = express();

const db = require('./dataBase').getInstance();
db.setModels();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash());

const {userRouter} = require('./router');

app.use('/users', userRouter);

app.all('*', (req, res) =>{
    res.status(400).end()
});

app.listen(3000, (err) => {
    if (err) console.log(err);
    console.log('Listen 3000 ....')
});

module.exports = app;
