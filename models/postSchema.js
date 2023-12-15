const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
    title : {
        type : String,
        required : [true, `Post Title is a required field.`]
    },
    content : {
        type : String,
        required : [true, `Post Content is a required field.`]
    },
    userId : {
        type : String,
        required : [true, `Post Userid is a required field.`]
    }
})

const Product = mongoose.model("posts", postSchema);

module.exports = Product;