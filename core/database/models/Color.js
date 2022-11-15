module.exports = function(sequelize, DataTypes) {
    let alias = 'Productos'

    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        color: {
            type: DataTypes.STRING

        }
        
    }

    let config = {
        tableName: 'productos',
        timestamps: false
    }

    let Productos = sequelize.define(alias, cols, config)

    return Productos
}