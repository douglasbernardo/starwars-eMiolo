const jwt = require("jsonwebtoken")
const  usuarioModel = require("../../models/Usuario")

const getUserByToken = async(token)=>{
    
    if(!token){
        return res.status(401).json({
            message:"Token not found"
        })
    }

    const decoded = jwt.verify(token,process.env.TOKEN_SECRET)
    const userId = decoded.id

    const usuario = await usuarioModel.findOne({_id:userId})

    return usuario
}

module.exports = getUserByToken