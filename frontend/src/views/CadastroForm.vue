<template>
  <div>
    <div class="form-container">
      <form action="" method="post">
        <h1>Faça o Cadastro</h1>
         <div class="input-container">
          <Input type="text" placeholder="Digite o seu nome"></Input>
        </div>
        <div class="input-container">
          <Input type="text" placeholder="Digite o seu e-mail"></Input>
        </div>
        <div class="input-container">
          <Input type="password" placeholder="Digite a sua senha"></Input>
        </div>
         <div class="input-container">
          <Input type="password" placeholder="Confirme a seu senha"></Input>
        </div>
        <button class="btn">Cadastre-se</button>
        <div class="icons">
          <img :src="logo_src[0]" :alt="app_name[0]">
          <img :src="logo_src[1]" :alt="app_name[1]">
        </div>
        <p>Já é cadastrado? Faça o <router-link to="/login">login</router-link></p>
      </form>
    </div>  
  </div>
</template>

<script>
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

  .btn{
    color: black;
    height: 30px;
    background-color: #800000;
    text-justify: inter-word;
    border-radius: 40px 40px 40px 40px;
    width: 200px;
    margin-left: 12%;
    border: none;
    text-align: center;
    cursor: pointer;
  }

  .btn:hover{
    background-color: #8B0000;
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