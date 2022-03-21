<template>
    <div>
        <button class="btn" @click="login()">
            Cadastre-se
        </button>
    </div>
</template>


<script>
    import api from "../services/api"

    export default {
        name:"Login",
        // data(){
        //     return{
        //         dados:null
        //     }
        // },
        creted(){
            this.login()
        },
        methods:{
            async login(){
               await api.post("/cadastro",{
                    nome:"",
                    email:"",
                    senha:"",
                    confirmacaoSenha:""
                })
            }
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