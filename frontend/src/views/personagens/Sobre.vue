<template>
    <div>
        <h1>Sobre Personagem com Id {{$route.params.id}}</h1>
        <table border="3">
            <tr>
                <th>Nome:</th>
                <td>{{personagem.name}}</td>
            </tr>
            <tr>
                <th>Altura:</th>
                <td>{{personagem.height}}</td>
            </tr>
            <tr>
                <th>Cor da Pele:</th>
                <td>{{personagem.skin_color}}</td>
            </tr>
            <tr>
                <th>Ano da Aniversario:</th>
                <td>{{personagem.birth_year}}</td>
            </tr>
            <tr>
                <th>Cor dos olhos:</th>
                <td>{{personagem.eye_color}}</td>
            </tr>
            <!-- <tr>
                <th>Filmes:</th>
                <td v-for="(person, index) in personagem" :key="index">
                    {{index.name}}
                </td>
            </tr> -->
        </table>
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

        methods: {
            async sobrePersonagem(){
                await axios.get("https://swapi.dev/api/people/"+this.$route.params.id).then((response)=>{
                    this.personagem = response.data
                })
            }
        },

        created(){
            this.sobrePersonagem()
        }
    }
</script>