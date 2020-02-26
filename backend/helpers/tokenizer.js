const jwr = require('jsonwebtoken');

const {JWT_SECRET} = require('../constantas');

module.exports = (email) => {
    const access_token = jwr.sign({email}, JWT_SECRET.ACCESS, {expiresIn: '15m'});

    return access_token

};
