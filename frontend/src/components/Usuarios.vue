<template>
    <div>
        <div>
            <h2>Todos os Usuários Cadastrados</h2>
            <table>
                <tr>
                    <th>Nomes:</th>
                    <th>E-mails</th>
                </tr>
                <tr v-for="(user, index) in users" :key="index">
                    <td>
                        {{user.nome}}
                    </td>
                    <td>
                        {{user.email}}
                    </td>
                </tr>
            </table>
        </div>
        <router-link to="/home">
            <p>Voltar</p>
        </router-link>
    </div>
</template>

<script>
    import api from "../services/api"
    export default {
        name:"Usuarios",
        data(){
            return {
                users:""
            }
        },
        created: async function() {
            await api.get("/usuariosAll").then((response)=>{
                this.users = response.data.users
            })
        }
    }
</script>

<style>
    table {
        font-family: arial, sans-serif;
        border-collapse: collapse;
        width: 100%;
    }
    td, th {
        border: 1px solid #dddddd;
        text-align: left;
        padding: 8px;
    }

    tr:nth-child(even) {
        background-color: #dddddd;
    }
</style>