import { createRouter, createWebHistory } from 'vue-router'

import LoginForm from "../views/LoginForm"
import CadastroForm from "../views/CadastroForm"
import Hello from "../components/Hello"
import Home from "../components/Home"
import Usuarios from "../components/Usuarios"
import Perfil from "../components/Perfil"
import Filmes from "../components/Filmes"

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: LoginForm,
    meta:{
      requiresAuth:false
    }
  },
  {
    path: '/',
    name: 'Hello',
    component: Hello,
    meta:{
      requiresAuth:false
    }
  },
  {
    path: '/cadastro',
    name: 'Cadastro',
    component: CadastroForm,
    meta:{
      requiresAuth:false
    }
  },
  {
    path:'/home',
    name:"Home",
    component:Home,
    meta:{
      requiresAuth:true
    }
  },
  {
    path: '/home/perfil/:id',
    name: 'Perfil',
    component: Perfil,
    meta:{
      requiresAuth:true
    }
  },
  {
    path:'/home/usuarios',
    name:"Usuarios",
    component:Usuarios,
    meta:{
      requiresAuth:true
    }
  },
  {
    path:'/home/filmes',
    name:"Filmes",
    component:Filmes,
    meta:{
      requiresAuth:true
    }
  },

  {
    path:"/:patchMatch(.*)",
    redirect:"/login"
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})


router.beforeEach((to,from,next)=>{
  const usuarioAtual = localStorage.getItem("token")
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)

  if(requiresAuth && !usuarioAtual) next("/login")
  else if(!requiresAuth && usuarioAtual) next("/home")
  else next()
})  

export default router
