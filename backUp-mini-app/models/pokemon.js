const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");
const sequelizeInstance = dbConnect.Sequelize;


class Pokemons extends Model { }
//Sequelize will create this table if it doesn't exist on startup
Pokemons.init({
    // id: {
    //     type: DataTypes.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true
    // },

    Name: {
        type: DataTypes.STRING, allowNull: false, required: true,
     
    },
    url: {
        type: DataTypes.STRING, allowNull: false, required: true
    },
   
   
},
    {
        sequelize: sequelizeInstance, modelName: 'pokemons', timestamps: true, freezeTableName: true
    }
)
module.exports = Pokemons;


