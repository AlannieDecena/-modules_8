const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");
const Cocktails = require("./cocktails");
const sequelizeInstance = dbConnect.Sequelize;
class Ingredients extends Model { }


//Sequelize will create this table if it doesn't exist on startup
Ingredients.init({
    id: {
        type: DataTypes.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true
    },
    drinkId: {
        type: DataTypes.INTEGER, allowNull: false, required: true,
        references: {
            model: Cocktails,
            key: "id"
        }
    },
    ingredient: {
        type: DataTypes.STRING, allowNull: false, required: true
    },


},
    {
        sequelize: sequelizeInstance, modelName: 'ingredients', timestamps: true, freezeTableName: true
    }
)
module.exports = Ingredients;