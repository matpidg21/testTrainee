const db = require('../../dataBase').getInstance();

module.exports = async (req, res) => {
    const UserModel = db.getModel('User');
    const id = req.params;

    try {
        const getUser = await UserModel.findOne({
            where: id
        });

        res.status(200).json(getUser)

    } catch (e) {
        console.log(e);
    }
};
