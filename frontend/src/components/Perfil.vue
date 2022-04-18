<template>
    <div>
        <h1>Meus dados</h1>
         <div>
            <table>
                <tr>
                    <th>Nome:</th>
                    <th>E-mail</th>
                    <th>{{isLoggedWithGoogle}}</th>
                </tr>
                <tr>
                    <td>
                        {{user.nome}}
                    </td>
                    <td>
                        {{user.email}}
                    </td>
                    <td>
                        {{isLoggedWith}}
                    </td>
                </tr>
            </table>
            <router-link to="/home">
                <p>Voltar</p>
            </router-link>
        </div>
    </div>
</template>


<script>
 import api from "../services/api"
    export default {
        name:"Perfil",
        data(){
            return{
                user:"",
                LoggedWithGoogle:localStorage.getItem("googleId")
            }
        },
        created: async function MyProfile(){
            await api.get(`/perfil/${this.$route.params.id}`).then((response)=>{
                this.user = response.data.user
            })
        },

        computed:{
            isLoggedWith(){
                return localStorage.getItem("googleId") ? 'Você está logado com o google' : this.user.senha
            },
            isLoggedWithGoogle(){
                return this.LoggedWithGoogle ? 'Não há senha cadastrada' : 'Senha Criptografada'
            }
        }
    }
</script>

<style scoped>

</style>