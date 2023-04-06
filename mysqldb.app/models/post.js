const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");
const User = require("./user");
const sequelizeInstance = dbConnect.Sequelize;
class Post extends Model { }
//Sequelize will create this table if it doesn't exist on startup
Post.init({
    id: {
        type: DataTypes.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true
    },
    title: {
        type: DataTypes.STRING, allowNull: false, required: true
    },
    image: {
        type: DataTypes.STRING, allowNull: false, required: true
    },
    description : {
        type: DataTypes.STRING, allowNull: false, required: true
    },
    userID: {
        type: DataTypes.INTEGER, allowNull: false, required: true,
        references: {
            model: User,
            key: "id"
        }
    },

    liked : {
        type: DataTypes.INTEGER, allowNull: true
    },


},
    {
        sequelize: sequelizeInstance, modelName: 'posts', timestamps: true, freezeTableName: true
    }
)
module.exports = Post;