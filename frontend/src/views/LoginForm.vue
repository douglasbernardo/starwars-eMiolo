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
        <p>Não é cadastrado? <router-link to="/cadastro">cadastre-se</router-link></p>
      </form>
      <button @click="SignInGoogle">Login com Google<img :src="logo_src"/></button>
    </div>  
  </div>
</template>

<script>
  import Button from "../components/Button.vue"
  import Input from "../components/Input.vue"
  import api from "../services/api"
  import {inject} from "vue"

  export default {
    name:"loginForm",
    data() {
      return {
        logo_src:"/img/google.png",
        app_name:"Logo do google",
        message:"",
      }
    },
    components:{
      Input,
      Button
    },
    setup() {
      const Vue3GoogleOauth = inject("Vue3GoogleOauth")

      return{
        Vue3GoogleOauth
      }
    },
    methods: {
      async login(event){

        
        try{
          const userObj = {
            email: event.target.email.value,
            senha: event.target.senha.value,
          }
          await api.post('/login', userObj)
            .then((response) => {
              console.log("Logado com sucesso",response.data)
              localStorage.setItem("userId",response.data.userId)
              localStorage.setItem("token",response.data.token)
              this.$router.push({ name: 'Home'})
            })
        }
        catch(e){
          this.message = e.response.data.message
          setTimeout(()=>{
            this.message = ""
          },3000)
          console.log("erro ao tentar logar:"+e)
        }
      },
      async SignInGoogle(){

        try{
          const googleUser = await this.$gAuth.signIn()
          const profile = googleUser.getBasicProfile()
          const userGoogleObj = {
            id:profile.getId(),
            nome:profile.getName(),
            email:profile.getEmail()
          }

          await api.post('/googleLogin',userGoogleObj)
            .then((response)=>{
              console.log("Logado com sucesso",response.data)
              localStorage.setItem("userId",response.data.userId)
              localStorage.setItem("token",response.data.token)
              this.$router.push({ name: 'Home'})
          })
        }
        catch(e){
          this.message = e.response.data.message
          setTimeout(()=>{
            this.message = ""
          },3000)
          console.log("erro ao tentar logar com google:"+e)
        }


      }
    },
    created(){
      this.login()
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

  button{
    height: 40px;
    width: 10%;
    margin-left:5px;
    background: #42b983;
    border-radius: 30px;
    border: none;
    cursor: pointer;
    color: aliceblue;
  }
 
  button img{
    height: 20px;
    width: 20px;
    margin: -5px;
    margin-left: 20px;
  }


</style>