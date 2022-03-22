<template>
    <div>
        <button class="btn" @click="cadastro()">
            Cadastre-se
        </button>
    </div>
</template>


<script>
    //import api from "../services/api"

    export default {
        name:"Login",
        data(){
            return{
                nome:null,
                email:null,
                senha:null,
                confirmacaoSenha:null
            }
        },
        creted(){
            this.cadastro()
        },
        methods:{
            // async usuarios(){
            //         await api.get("http://localhost:2000/usuario/usuariosAll").then((response)=>{
            //         this.users = response
            //     })
            // }
        }
    }
</script>
<style scoped>

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

</style>