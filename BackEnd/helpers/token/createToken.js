const jwt = require("jsonwebtoken")

require("dotenv").config()

const createToken = async(usuario,req,res)=>{
    const token = jwt.sign(
        {
            name:usuario.nome,
            id:usuario._id
        },
        process.env.TOKEN_SECRET
    )

    res.status(200).json({
        message:"Você está autenticado",
        token:token,
        userId:usuario._id
    })
}

module.exports = createToken