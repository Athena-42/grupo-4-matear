module.exports = function(sequelize, DataTypes) {
    let alias = 'Imagen'

    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        imagen_producto: {
            type: DataTypes.STRING

        },
        product_id: {
            type: DataTypes.INTEGER

        }
    }

    let config = {
        tableName: 'imagenes',
        timestamps: false
    }

    let Imagen = sequelize.define(alias, cols, config)

    Imagen.associate = function(models) {
        Imagen.belongsTo(models.Productos, {
            as: "products",
            foreignkey: "product_id"
        });

    }

    return Imagen
}