const dbConfig = require('../config/db-configs')

const { Sequelize, DataTypes } = require('sequelize')

const sequelize: any = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: false,


    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle,
    }
}
)

sequelize.authenticate()
    .then(() => {
        console.log('connected')
    })
    .catch((err: any) => {
        console.log('Error' + err);
    })

const db: any = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.users = require('./users-model')(sequelize, DataTypes)
db.book = require('./books-model')(sequelize, DataTypes)
db.rents = require('./rent-model')(sequelize, DataTypes)

db.sequelize.sync({force : false})
.then(() => {
    console.log('yes re-sync done');
    
})

module.exports = db