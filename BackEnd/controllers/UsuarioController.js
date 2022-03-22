
const Usuario = require("../models/Usuario")
const bcrypt = require("bcrypt")
const createToken = require("../helpers/token/createToken")

class UsuarioController{
    static teste(req,res){
        res.send("Começando a criação da api")
    }
    static async cadastro(req,res){
      
        const {nome,email,senha,confirmacaoSenha} = req.body

        if(!nome || !email || !senha || !confirmacaoSenha){
            res.status(422).json({
                message:"Os dados devem ser preenchidos"
            })
            return
        }

        if(await Usuario.findOne({email})){
            res.status(422).json({
                message:"E-mail já existente"
            })
            return
        }       

        if(senha !== confirmacaoSenha){
            res.status(422).json({
                message:"As senhas não conferem,tente novamente"
            })
            return
        }

        const genSalt = bcrypt.genSaltSync(10)
        const hashPass = bcrypt.hashSync(senha,genSalt)

        const userObject = new Usuario({
            nome:nome,
            email:email,
            senha:hashPass,
        })


        try{
            const data = await userObject.save()
            await createToken(data,req,res)

        }catch(e){
            res.status(422).json({
                message:`Erro ao salvar os dados no banco: ${e}`
            })
        }
    }

    static async usuarios(req,res){
        const data = await Usuario.find({})
        res.status(200).json({
            users: data
        })
    }
}


module.exports = UsuarioController