module.exports = (sequelize, Sequelize) => {
    const Product = sequelize.define('product', {
        title: {
            type: Sequelize.STRING
        },
        price: {
            type: Sequelize.INTEGER
        },
        description: {
            type: Sequelize.TEXT
        },
        published: {
            type: Sequelize.BOOLEAN
        }
    })

    return Product
}