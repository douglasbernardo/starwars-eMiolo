const express = require("express")
const app = express()

const cors = require("cors")

require("dotenv").config()

app.use(express.json())
app.use(cors({
    credentials:true,
    origin:"http://localhost:8080"
}))
app.get("/",(req,res)=>{
    res.send("Hello world")
})

const rotaUsuario = require("./rotas/rotas")
app.use("/usuario",rotaUsuario)

app.listen(process.env.PORT || 3333)