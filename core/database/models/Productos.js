module.exports = function(sequelize, DataTypes) {
    let alias = 'Productos'

    let cols = {
        
    }

    let Productos = sequelize.define(alias, cols, config)

    return Productos
}