const bcrypt = require('bcrypt');

module.exports.hashPassword = async password => bcrypt.hash(password, 10);
module.exports.checkHashPassword = async (password, hash) => await bcrypt.compare(password,hash);
