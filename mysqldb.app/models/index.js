'use strict'
const User = require('./user')
const Post= require('./post')
const Comment = require('./comment') //require the model

async function init() {
    await User.sync();
    await Post.sync();
    await Comment.sync(); //sync the model
};

init();
module.exports = {
    User,
    Post,
    Comment //export the model
};

