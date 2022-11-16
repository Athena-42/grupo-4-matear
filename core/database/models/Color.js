module.exports = function(sequelize, DataTypes) {
    let alias = 'Color'

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
        tableName: 'color',
        timestamps: false
    }

    let Color = sequelize.define(alias, cols, config)

    Color.associate = function(models) {
        Color.hasMany(models.Productos, {
            as: "products",
            foreignkey: "categorie_id"
        });
    }

    return Color
}