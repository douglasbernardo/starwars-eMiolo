
const Usuario = require("../models/Usuario")
const bcrypt = require("bcrypt")
const createToken = require("../helpers/token/createToken")
const getToken = require("../helpers/token/getToken")
const getUserByToken = require("../helpers/token/getUserByToken")

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

    static async login(req,res){
        const {email,senha} = req.body

        if(!email || !senha){
            res.status(422).json({
                message:"Os dados devem ser preenchidos"
            })
            return
        }

        const usuario = await Usuario.findOne({email:email})

        if(!usuario){
            res.status(422).json({
                message:"Não há usuário com este e-mail!"
            })
            return
        }

        if(!await bcrypt.compare(senha,usuario.senha)) {
            res.status(422).json({
                message:"As senhas não conferem!"
            })
            return
        }  
       
        createToken(usuario,req,res)
    }

    static async perfil(req,res){
        
        const id = req.params.id

        const user = await Usuario.findOne({_id:id}).lean()
        res.status(200).json({
            user: user
        })
    }

    static async usuarios(req,res){
        const data = await Usuario.find()
        res.status(200).json({
            users: data
        })
    }
}


module.exports = UsuarioController