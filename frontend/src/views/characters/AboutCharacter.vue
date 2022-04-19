<template>
    <div>
        <h1>Sobre Personagem com Id: {{$route.params.id}}</h1>
        <table border="4">
            <tr>
                <th>Nome:</th>
                <td>{{character.name}}</td>
            </tr>
            <tr>
                <th>Altura:</th>
                <td>{{character.height}}</td>
            </tr>
             <tr>
                <th>Genêro:</th>
                <td>{{character.gender}}</td>
            </tr>
            <tr>
                <th>Cor da Pele:</th>
                <td>{{character.skin_color}}</td>
            </tr>
            <tr>
                <th>Ano da Aniversário:</th>
                <td>{{character.birth_year}}</td>
            </tr>
            <tr>
                <th>Cor dos olhos:</th>
                <td>{{character.eye_color}}</td>
            </tr>
        </table>
        <router-link :to="{name:'Characters'}">Voltar</router-link>
    </div>
</template>

<script>
    import axios from "axios"
    export default {
        name:"Sobre",

        data() {
            return {
                character:"",
            }
        },

        created: async function(){
            await axios.get(`https://swapi.dev/api/people/${this.$route.params.id}`).then((response)=>{ 
                this.character = response.data
            })
        }
    }
</script>