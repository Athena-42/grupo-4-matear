module.exports = function(sequelize, DataTypes) {
    let alias = 'Productos'

    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,






            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING

        },
        categories: {
            type: DataTypes.STRING

        },
        description: {
            type: DataTypes.STRING
        },
        price: {
            type: DataTypes.INTEGER
        },
        felipeon: {
            type: DataTypes.INTEGER
        }
        
    }

    let config = {
        tableName: 'products',
        timestamps: false
    }

    let Productos = sequelize.define(alias, cols, config)

    return Productos
}