const express = require("express")
const app = express()
const dbConnection = require("./database/dbConnection")
const bodyParser = require("body-parser")

const cors = require("cors")

require("dotenv").config()

app.use(express.urlencoded({extended: true,}),)
app.use(express.json())
app.use(bodyParser.json());
app.use(cors({
    credentials:true,
    origin:"http://localhost:8080"
}))

app.get("/",(req,res)=>{
    res.send("Hello world")
})

const rotaUsuario = require("./rotas/rotas")
app.use("/usuario",rotaUsuario)

app.listen(process.env.PORT)