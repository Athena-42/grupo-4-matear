module.exports = function(sequelize, DataTypes) {
    let alias = 'Categorias'

    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        categorie: {
            type: DataTypes.STRING

        }
    }

    let config = {
        tableName: 'categories',
        timestamps: false
    }

    let Productos = sequelize.define(alias, cols, config)

    return Productos
}