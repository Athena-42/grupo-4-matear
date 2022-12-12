module.exports = function(sequelize, DataTypes) {
    let alias = 'Categorias'

    let cols = {
        Id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        Categorie: {
            type: DataTypes.STRING

        }
    }

    let config = {
        tableName: 'categories',
        timestamps: false
    }

    let Categorias = sequelize.define(alias, cols, config)

    Categorias.associate = function(models) {
        Categorias.hasMany(models.Productos, {
            as: "products",
            foreignkey: "categorie_id"
        });

    }

    return Categorias
}