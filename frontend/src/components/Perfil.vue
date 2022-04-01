<template>
    <div>
        <h1>Meus dados</h1>
         <div>
            <table>
                <tr>
                    <th>Nome:</th>
                    <th>E-mail</th>
                    <th>Senha Criptografada</th>
                </tr>
                <tr>
                    <td>
                        {{user.nome}}
                    </td>
                    <td>
                        {{user.email}}
                    </td>
                      <td>
                        {{user.senha}}
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
            }
        },
        created: async function perfil(){
            await api.get(`/perfil/${this.$route.params.id}`).then((response)=>{
                this.user = response.data.user
            })
        }
    }
</script>

<style scoped>

</style>