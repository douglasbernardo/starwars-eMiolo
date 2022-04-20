
const User = require("../models/User")
const bcrypt = require("bcrypt")
const createToken = require("../helpers/token/createToken")

class UserController{

    static async signUp(req,res){
      
        const {name,email,password,confirmPassword} = req.body

        if(!name || !email || !password || !confirmPassword){
            res.status(422).json({
                message:"Os dados devem ser preenchidos"
            })
            return
        }

        if(await User.findOne({email})){
            res.status(422).json({
                message:"E-mail já existente"
            })
            return
        }       

        if(password !== confirmPassword){
            res.status(422).json({
                message:"As senhas não conferem,tente novamente"
            })
            return
        }

        const genSalt = bcrypt.genSaltSync(10)
        const hashPass = bcrypt.hashSync(password,genSalt)

        const userObject = new User({
            nome:name,
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

        const {email,password} = req.body

        if(!email || !password){
            res.status(422).json({
                message:"Os dados devem ser preenchidos"
            })
            return
        }

        const user = await User.findOne({email:email})

        if(!user){
            res.status(422).json({
                message:"Não há usuário com este e-mail!"
            })
            return
        }

        if(!await bcrypt.compare(password,user.senha)) {
            res.status(422).json({
                message:"As senhas não conferem!"
            })
            return
        }  
       
        createToken(user,req,res)
    }

    static async loginGoogle(req,res){

        const {id,name,email} = req.body

        const user = await User.findOne({email:email})

        if(!user){

            const userObject = new User({
                id_google:id,
                nome:name,
                email:email
            })

            try{
                const data = await userObject.save()
                createToken(data,req,res)
            }
            catch(e){
                console.log("Erro ao cadastradar",e)
            }
        }
        createToken(user,req,res)
    }

    static async myProfile(req,res){
        
        const id = req.params.id

        const user = await User.findOne({_id:id}).lean()
        res.status(200).json({
            user: user
        })
    }

    static async getUsers(req,res){

        const data = await User.find()
        res.status(200).json({
            users: data
        })
    }
}



module.exports = UserController