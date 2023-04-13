const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");
const sequelizeInstance = dbConnect.Sequelize;


class Vehicles extends Model { }
//Sequelize will create this table if it doesn't exist on startup
Vehicles.init({
    id: {
        type: DataTypes.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true
    },

    make: {
        type: DataTypes.STRING, allowNull: false, required: true,
     
    },
    VTN: {
        type: DataTypes.STRING, allowNull: false, required: true
    },
   
   
},
    {
        sequelize: sequelizeInstance, modelName: 'vehicles', timestamps: true, freezeTableName: true
    }
)
module.exports = Vehicles;


