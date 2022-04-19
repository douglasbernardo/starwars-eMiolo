const jwt = require("jsonwebtoken")

require("dotenv").config()

const createToken = async(user,req,res)=>{
    const token = jwt.sign(
        {
            name:user.nome,
            id:user._id
        },
        process.env.TOKEN_SECRET
    )

    res.status(200).json({
        message:"Você está autenticado",
        token:token,
        userId:user._id
    })
}

module.exports = createToken