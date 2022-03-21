<template>
  <div>
    <div class="form-container">
      <form>
        <h1>Faça o Cadastro</h1>
         <div class="input-container">
          <Input type="text" name="nome" placeholder="Digite o seu nome"></Input>
        </div>
        <div class="input-container">
          <Input type="text" name="email" placeholder="Digite o seu e-mail"></Input>
        </div>
        <div class="input-container">
          <Input type="password" name="senha" placeholder="Digite a sua senha"></Input>
        </div>
         <div class="input-container">
          <Input type="password" name="confirmacaoSenha" placeholder="Confirme a seu senha"></Input>
        </div>
        <Login/>
        <div class="icons">
          <a href="http://google.com"><img :src="logo_src[0]" :alt="app_name[0]"></a>
            <a href="http://facebook.com"><img :src="logo_src[1]" :alt="app_name[1]"></a>
        </div>
        <p>Já é cadastrado? Faça o <router-link to="/login">login</router-link></p>
      </form>
    </div>  
  </div>
</template>

<script>
  import Input from "../components/Input.vue"
  import Login from '../components/Login.vue'

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
      Login,
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

  a {
    color: #42b983;
  }
  img{
    height: 25px;
    margin: 10px;
    cursor: pointer;
  }

</style>