module.exports = function (sequelize, DataTypes) {
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
        },
        imagen: {
            type: DataTypes.STRING
        }
    }
    let config = {
        tableName: 'products',
        timestamps: false
    }
    let Productos = sequelize.define(alias, cols, config)

    Productos.associate = function (models){
        Productos.belongsTo(models.Categorias, {
            as: 'categoria',
            foreignKey: 'categorie_id'
        })
        Productos.belongsTo(models.Color, {
            as: 'color',
            foreignKey: 'color_id'
        })
        Productos.belongsTo(models.Imagen, {
            as: 'imagenes',
            foreignKey: 'product_id'
        })
    }
    return Productos;
}