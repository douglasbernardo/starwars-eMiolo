<template>
  <div>
    <div class="message" v-if="message">
      <p>{{message}}</p>
    </div>
    <div class="form-container">
      <form @submit.prevent="login" method="post" action="">
        <h1>Faça o Login</h1>
        <Input type="text" name="email" placeholder="Digite o seu e-mail"/>
        <Input type="password" name="senha" placeholder="Digite a sua senha"/>
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
  import Button from "../components/Button.vue"
  import Input from "../components/Input.vue"
  import api from "../services/api"

  export default {
    name:"loginForm",
    data() {
      return {
        logo_src:[
          "/img/google.png",
          "/img/facebook.png"
        ],
        app_name:["Logo do google","Logo do Facebook"],
        message:""
      }
    },
    components:{
      Input,
      Button,
    },
    created() {
      this.login()
    },
    methods: {
      async login(event){
        const userObject = {
          email: event.target.email.value,
          senha: event.target.senha.value,
        }

        try{
          await api.post('/login', userObject).then((response) => {
            console.log("Logado com sucesso",response.data)
            localStorage.setItem("token",response.data.token)
            this.$router.push({ name: 'Home'})
          })
        }catch(e){
          this.message = e.response.data.message
          setTimeout(()=>{
            this.message = ""
          },3000)
          console.log("erro ao tentar logar:"+e)
        }
      }
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
    position: fixed;
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
  
  .message{
    background-color:tomato;
    height: 20%;
    width: 30%;
    display: flex;
    border-radius: 25px;
    margin-top:0.3%;
  }

  .message p{
    font-size: 18px;
    color: white;
    font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  }


</style>