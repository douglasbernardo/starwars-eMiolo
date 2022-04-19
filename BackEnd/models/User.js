
const mongoose = require("mongoose")

const User = mongoose.model(
    "User",
    new mongoose.Schema({
        id_google:{type:String,required:false},
        nome:{type:String,required:true},
        email:{type:String,required:true},
        senha:{type:String,required:false},
    },
    {timestamps:true}
    )
)

module.exports = User