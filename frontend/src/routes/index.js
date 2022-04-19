import { createRouter, createWebHistory } from 'vue-router'

import Hello from "../components/Hello"
import Home from "../components/Home"
import Users from "../components/Users"
import Profile from "../components/Profile"
import Movies from "../components/Movies"

/* views */
import LoginForm from "../views/form/LoginForm"
import SignUpForm from "../views/form/SignUpForm"
import Characters from "../views/characters/Characters"
import AboutCharacter from "../views/characters/AboutCharacter"

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
    name: 'SignUpForm',
    component: SignUpForm,
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
    name: 'Profile',
    component: Profile,
    meta:{
      requiresAuth:true
    }
  },
  {
    path:'/home/usuarios',
    name:"Users",
    component:Users,
    meta:{
      requiresAuth:true
    }
  },
  {
    path:'/home/starwars/filmes',
    name:"Movies",
    component:Movies,
    meta:{
      requiresAuth:true
    }
  },
  {
    path:'/home/starwars/personagens',
    name:"Characters",
    component:Characters,
    meta:{
      requiresAuth:true
    }
  },

  {
    path:'/home/starwars/personagens/sobre/:id',
    name:"AboutCharacter",
    component:AboutCharacter,
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
  const currentUser = localStorage.getItem("token")
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)

  if(requiresAuth && !usuarioAtual) next("/login")
  else if(!requiresAuth && currentUser) next("/home")
  else next()
})  

export default router
