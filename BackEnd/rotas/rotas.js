
const router = require("express").Router()

const Usuario = require("../controllers/UsuarioController")

router.get("/teste",Usuario.teste)

module.exports = router