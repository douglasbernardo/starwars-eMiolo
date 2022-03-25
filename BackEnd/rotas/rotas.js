
const router = require("express").Router()

const UsuarioController = require("../controllers/UsuarioController")

router.get("/teste",UsuarioController.teste)
router.post("/cadastro",UsuarioController.cadastro)
router.post("/login",UsuarioController.login)
router.get("/profile",UsuarioController.profile)
router.get("/usuariosAll",UsuarioController.usuarios)

module.exports = router