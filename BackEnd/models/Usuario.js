
const mongoose = require("mongoose")

const Usuario = mongoose.model(
    "Usuario",
    new mongoose.Schema({
        id_google:{type:String,required:false},
        nome:{type:String,required:true},
        email:{type:String,required:true},
        senha:{type:String,required:false},
    },
    {timestamps:true}
    )
)

module.exports = Usuario