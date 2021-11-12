const dbConfig = require('../config');

const Sequelize = require('sequelize');

const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD, {
        host: dbConfig.HOST,
        dialect: dbConfig.dialect,

        pool: {
            max: dbConfig.pool.max,
            min: dbConfig.pool.min,
            acquire: dbConfig.pool.acquire,
            idle: dbConfig.pool.idle
        }
    }
)

sequelize.authenticate()
.then(() => console.log('Database id connected'))
.catch(err => console.log(`ERROR ${err}`))

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.products = require('./productModel')(sequelize, Sequelize);
db.reviews = require('./reviewModel')(sequelize, Sequelize);

db.sequelize.sync({ force: false }).then(() => console.log('yes re-sync'));

db.products.hasMany(db.reviews, { foreignKey: 'product_id', as: 'review' });
db.reviews.belongsTo(db.products, { foreignKey: 'product_id', as: 'product'});

module.exports = db;