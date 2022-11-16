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

    let Categorias = sequelize.define(alias, cols, config)

    Categorias.associate = function(models) {
        Categorias.hasMany(models.Productos, {
            as: "productos",
            foreignkey: "categorie_id"
        });

    }

    return Categorias
}