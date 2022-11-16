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
        description: {
            type: DataTypes.STRING
        },
        price: {
            type: DataTypes.INTEGER
        },
        oferta: {
            type: DataTypes.INTEGER
        },
        categorie_id: {
            type: DataTypes.INTEGER

        },
        color_id: {
            type: DataTypes.INTEGER
        }
        
    }

    let config = {
        tableName: 'products',
        timestamps: false
    }

    let Productos = sequelize.define(alias, cols, config)

    Productos.associate = function(models) {
        Productos.hasMany(models.Categorias, {
            as: "categoria",
            foreignkey: "categorie_id"
        });
        Productos.hasMany(models.Color, {
            as: "color",
            foreignkey: "color_id"
        });

    }

    return Productos
}