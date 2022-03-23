<template>
  <div>
      <div class="message" v-if="message">
        <p>{{message}}</p>
      </div>
    <div class="form-container">
      <form @submit.prevent="cadastro" method="post" action="">
        <h1>Faça o Cadastro</h1>
        <Input type="text" name="nome" v-model="nome" placeholder="Digite o seu nome"/>
        <Input type="text" name="email" v-model="email" placeholder="Digite o seu e-mail"/>
        <Input type="password" name="senha" v-model="senha" placeholder="Digite a sua senha"/>
        <Input type="password" name="confirmacaoSenha" v-model="confirmacaoSenha" placeholder="Confirme a seu senha"/>
        <Button text="cadastre-se"/>
        <div class="icons">
          <a href="http://google.com"><img :src="logo_src[0]" :alt="app_name[0]"></a>
          <a href="http://facebook.com"><img :src="logo_src[1]" :alt="app_name[1]"></a>
        </div>
        <p>Já é cadastrado? Faça o <router-link to="/login">login</router-link></p>
      </form>
      <span>{{users}}</span>
    </div>  
  </div>
</template>

<script>
  import Input from "../components/Input.vue"
  import Button from '../components/Button.vue'
  import api from "../services/api"
  
  export default {
    name:"loginForm",
    data() {
      return {
        logo_src:["/img/google.png","/img/facebook.png"],
        app_name:["Logo do google","Logo do Facebook"],
        users:"",
        message: ""
      }
    },
    components:{
      Input,
      Button,
    },
    created(){
      this.cadastro()
      this.usuarios()
    },
    methods: {
      async cadastro(event){
       
        const userObject = {
          nome: event.target.nome.value,
          email: event.target.email.value,
          senha: event.target.senha.value,
          confirmacaoSenha: event.target.confirmacaoSenha.value
        }
        this.user = userObject

        try{
            await api.post('/cadastro', userObject).then((response) => {
              console.log("Cadastrado com sucesso",response.data)
              localStorage.setItem("token",response.data.token)
              this.$router.push({ name: 'Home'})
            })
        }catch(e){
           this.message = e.response.data.message
          setTimeout(()=>{
              this.message = ""
          },3000)
          console.log("erro ao tentar cadastrar:"+e)
        }

      },
      async usuarios(){
        await api.get('/usuariosAll').then((response)=>{
          console.log(response.data.users)
        })
      }
    },
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

  a {
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
    margin-top:2%;
  }

  .message p{
    font-size: 18px;
    color: white;
    font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  }

</style>