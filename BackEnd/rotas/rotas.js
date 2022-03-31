
const router = require("express").Router()

const UsuarioController = require("../controllers/UsuarioController")

router.post("/cadastro",UsuarioController.cadastro)
router.post("/login",UsuarioController.login)
router.post("/googleLogin",UsuarioController.loginGoogle)
router.get("/perfil/:id",UsuarioController.perfil)
router.get("/usuariosAll",UsuarioController.usuarios)

module.exports = router