import { createRouter, createWebHistory } from 'vue-router'

import LoginForm from "../views/LoginForm"
import CadastroForm from "../views/CadastroForm"
import Hello from "../components/Hello"
import Home from "../components/Home"

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: LoginForm
  },
  {
    path: '/',
    name: 'Hello',
    component: Hello
  },
  {
    path: '/cadastro',
    name: 'Cadastro',
    component: CadastroForm
  },
  {
    path:'/home',
    name:"Home",
    component:Home
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


export default router
