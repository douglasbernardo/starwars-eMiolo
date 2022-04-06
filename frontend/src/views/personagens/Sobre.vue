<template>
    <div>
        <h1>Sobre Personagem com Id: {{$route.params.id}}</h1>
        <table border="4">
            <tr>
                <th>Nome:</th>
                <td>{{personagem.name}}</td>
            </tr>
            <tr>
                <th>Altura:</th>
                <td>{{personagem.height}}</td>
            </tr>
             <tr>
                <th>Genêro:</th>
                <td>{{personagem.gender}}</td>
            </tr>
            <tr>
                <th>Cor da Pele:</th>
                <td>{{personagem.skin_color}}</td>
            </tr>
            <tr>
                <th>Ano da Aniversário:</th>
                <td>{{personagem.birth_year}}</td>
            </tr>
            <tr>
                <th>Cor dos olhos:</th>
                <td>{{personagem.eye_color}}</td>
            </tr>
        </table>
        <router-link :to="{name:'Personagens'}">Voltar</router-link>
    </div>
</template>

<script>
    import axios from "axios"
    export default {
        name:"Sobre",

        data() {
            return {
                personagem:"",
            }
        },

        created: async function(){
            await axios.get(`https://swapi.dev/api/people/${this.$route.params.id}`).then((response)=>{ 
                this.personagem = response.data
            })
        }
    }
</script>