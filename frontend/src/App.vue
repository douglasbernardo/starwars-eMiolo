<template>
  <div>
    <img id="helloImg" alt="Vue logo" src="./assets/star-wars-logo.png">
  </div>
  <Hello msg="Bem vindo"/>
  <Input label="Nome:" type="text" placeholder="Seu nome"/>
  <Input label="Email:" type="email" placeholder="Seu e-mail"/>
  <Input label="Senha:" type="password" placeholder="Sua senha"/>
</template>

<script>
import Hello from './components/Hello.vue'
import Input from "./components/Input.vue"

export default {
  name: 'App',
  components: {
    Hello,
    Input
  }
}
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  #helloImg{
    height:90px;
    width: 100px;
  }
</style>
