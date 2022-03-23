<template>
  <div>
    <div class="form-container">
      <form action="" method="post">
        <h1>Faça o Login</h1>
        <Input type="text" placeholder="Digite o seu e-mail"/>
        <Input type="password" placeholder="Digite a sua senha"/>
        <Button text="Login"/>
        <div class="icons">
          <img :src="logo_src[0]" :alt="app_name[0]">
          <img :src="logo_src[1]" :alt="app_name[1]">
        </div>
        <p>Não é cadastrado? <router-link to="/cadastro">cadastre-se</router-link></p>
      </form>
    </div>  
  </div>
</template>

<script>
  import Button from '../components/Button.vue'
  import Input from "../components/Input.vue"

  export default {
    name:"loginForm",
    data() {
      return {
        logo_src:[
          "/img/google.png",
          "/img/facebook.png"
        ],
        app_name:["Logo do google","Logo do Facebook"]
      }
    },
    components:{
      Input,
      Button,
    }
  }
</script>


<style scoped>

  div{
    display: flex;
    justify-content: center;
    justify-items: center;
  }
  h1{
    padding:10px;
    margin-left: 10%;
    margin: 20px;
    font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  }
  .input-container {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    padding:0;
    text-align: center;
    height: 30;
    margin: 2;
  }
  .form-container{
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: -10%;
  }
  p{
    text-align: center;
    margin-left:30px;
  }

  a{
    color: #42b983;
  }
  .icons img{
    height: 25px;
    margin: 10px;
    cursor: pointer;
  }

</style>