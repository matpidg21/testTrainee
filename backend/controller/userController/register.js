const db = require('../../dataBase').getInstance();
const {passwordHasher} = require('../../helpers');

module.exports = async (req, res) => {
    const UserModel = db.getModel('User');
    const user = req.body;

    try {
        if (!user.name || !user.email || !user.password || !user.bio) {
            res.send('Enter all values')
        }

        const checkUser = await UserModel.findOne({
            where: {email: user.email}
        });

        if (!checkUser) {

            user.password = await passwordHasher.hashPassword(user.password);
            const createUser = await UserModel.create(user);

            res.json(createUser)
        } else {
            res.send('User already exists')
        }
    } catch (e) {
        console.log(e);
    }
};
