const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");
const sequelizeInstance = dbConnect.Sequelize;


class Cocktails extends Model { }
//Sequelize will create this table if it doesn't exist on startup
Cocktails.init({
    id: {
        type: DataTypes.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true
    },

    drinkName: {
        type: DataTypes.STRING, allowNull: false, required: true,
     
    },
    category: {
        type: DataTypes.STRING, allowNull: false, required: true
    },
    instructions: {
        type: DataTypes.STRING (2000), allowNull: false, required: true,
    
    },
   
},
    {
        sequelize: sequelizeInstance, modelName: 'cocktails', timestamps: true, freezeTableName: true
    }
)
module.exports = Cocktails;


