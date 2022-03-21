
const router = require("express").Router()

const UsuarioController = require("../controllers/UsuarioController")

router.get("/teste",UsuarioController.teste)
router.post("/cadastro",UsuarioController.cadastro)

module.exports = router