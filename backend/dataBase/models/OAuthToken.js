module.exports = (sequelize, DataTypes) => {
    const OAuthToken = sequelize.define('OAuthToken', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        user_id: {
            type: DataTypes.INTEGER,
        },
        access_token: {
            type: DataTypes.STRING
        }
    }, {
        tableName: 'oauth_token',
        timestamps: false
    });

    const User = sequelize.import('./User.js');

    OAuthToken.belongsTo(User, {foreignKey: 'user_id'});

    return OAuthToken;
};
