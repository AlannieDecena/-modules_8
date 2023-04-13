const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");
const sequelizeInstance = dbConnect.Sequelize;
const Cocktails = require("./cocktails");
const Ingredients = require("./ingredients");

class Measurements extends Model { }
//Sequelize will create this table if it doesn't exist on startup
Measurements.init({
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
    ingredientId: {
        type: DataTypes.INTEGER, allowNull: false, required: true,
        references: {
            model: Ingredients,
            key: "id"
        }
    }, 
    measurement: {
        type: DataTypes.STRING, allowNull: false, required: true
    },
},
    {
        sequelize: sequelizeInstance, modelName: 'measurements', timestamps: true, freezeTableName: true
    }
)
module.exports = Measurements;