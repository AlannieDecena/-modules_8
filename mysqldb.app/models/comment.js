const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");
const Post = require("./post");
const User = require("./user");
const sequelizeInstance = dbConnect.Sequelize;
class Comment extends Model { }
//Sequelize will create this table if it doesn't exist on startup
Comment.init({
    id: {
        type: DataTypes.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true
    },
    comment: {
        type: DataTypes.STRING, allowNull: false, required: true
    },
    postID: {
        type: DataTypes.INTEGER, allowNull: false, required: true,
        references: {
            model: Post,
            key: "id"
        }
    },
    userID: {
        type: DataTypes.INTEGER, allowNull: false, required: true,
        references: {
            model: User,
            key: "id"
        }
    },
   
},
    {
        sequelize: sequelizeInstance, modelName: 'comments', timestamps: true, freezeTableName: true
    }
)
module.exports = Comment;


