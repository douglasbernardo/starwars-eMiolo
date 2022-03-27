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
        <g-signin-button
          :params="googleSignInParams"
          @success="onSignInGoogleSuccess"
          @error="onSignInGoogleError">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" aria-hidden="true"><title>Google</title><g fill="none" fill-rule="evenodd"><path fill="#4285F4" d="M17.64 9.2045c0-.6381-.0573-1.2518-.1636-1.8409H9v3.4814h4.8436c-.2086 1.125-.8427 2.0782-1.7959 2.7164v2.2581h2.9087c1.7018-1.5668 2.6836-3.874 2.6836-6.615z"></path><path fill="#34A853" d="M9 18c2.43 0 4.4673-.806 5.9564-2.1805l-2.9087-2.2581c-.8059.54-1.8368.859-3.0477.859-2.344 0-4.3282-1.5831-5.036-3.7104H.9574v2.3318C2.4382 15.9832 5.4818 18 9 18z"></path><path fill="#FBBC05" d="M3.964 10.71c-.18-.54-.2822-1.1168-.2822-1.71s.1023-1.17.2823-1.71V4.9582H.9573A8.9965 8.9965 0 0 0 0 9c0 1.4523.3477 2.8268.9573 4.0418L3.964 10.71z"></path><path fill="#EA4335" d="M9 3.5795c1.3214 0 2.5077.4541 3.4405 1.346l2.5813-2.5814C13.4632.8918 11.426 0 9 0 5.4818 0 2.4382 2.0168.9573 4.9582L3.964 7.29C4.6718 5.1627 6.6559 3.5795 9 3.5795z"></path></g></svg>
          Continue com Google
        </g-signin-button>
        <p>Não é cadastrado? <router-link to="/cadastro">cadastre-se</router-link></p>
      </form>
    </div>  
  </div>
</template>

<script>
  import Button from "../components/Button.vue"
  import Input from "../components/Input.vue"
  import api from "../services/api"
  import GSignInButton from 'vue-google-signin-button';
  export default {
    name:"loginForm",
    data() {
      return {
        message:""
      }
    },
    components:{
      Input,
      Button,
      GSignInButton
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
          await api.post('/login', userObject)
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
  .g-signin-button {
  /* This is where you control how the button looks. Be creative! */
  display: inline-block;
  padding: 4px 8px;
  border-radius: 3px;
  background-color: #3c82f7;
  color: #fff;
  box-shadow: 0 3px 0 #0f69ff;
}


</style>