
const router = require("express").Router()

const UserController = require("../controllers/UserController")

router.post("/cadastro",UserController.signUp)
router.post("/login",UserController.login)
router.post("/googleLogin",UserController.loginGoogle)
router.get("/perfil/:id",UserController.myProfile)
router.get("/usuariosAll",UserController.getUsers)

module.exports = router