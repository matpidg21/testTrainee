const db = require('../../dataBase').getInstance();
const {tokenizer, passwordHasher} = require('../../helpers');

module.exports = async (req, res) => {
    const UserModel = db.getModel('User');
    const OAuthModel = db.getModel('OAuthToken');

    const {email, password} = req.body;

    try {
        const findUser = await UserModel.findOne({
            where: {email: email}
        });

        if (!findUser) {
            res.send('User is not found')
        }

        const isPassOk = await passwordHasher.checkHashPassword(password, findUser.password);
        if (!isPassOk) res.send('Password is wrong');


        const token = await tokenizer(email);

        await OAuthModel.create({user_id: findUser.id, access_token: token});

        res.json(token);
    } catch (e) {
        console.log(e);
    }

};
