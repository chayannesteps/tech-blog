const Sequelize = require('sequelize');
require('dotenv').config();
const sequelize = process.env.JAWSDB_URL
? new Sequelize(process.env.JAWSDB_URL)
: new Sequelize(process.env.DB, process.env.USER, process.env.DB_PW, {
    host: '127.0.0.1',
    dialect: 'mysql',
    port: 3306
})
module.exports = sequelize