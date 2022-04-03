<template>
    <div>
        <div>
            <h2>Todos os Personagens</h2>
            <table>
                <tr>
                    <th>Nome dos Personagens:</th>
                    <th>Mais Sobre</th>
                </tr>
                <tr v-for="(personagem, index) in personagens" :key="index">
                    <td>
                        {{personagem.name}}
                    </td>
                    <router-link :to="{name:'Sobre',params:{id:personagem.url.slice(29,-1)}}">Mais</router-link>
                </tr>
            </table>
        </div>
        <h3>{{teste}}</h3>
        <router-link to="/home">
            <p>Voltar</p>
        </router-link>
    </div>
</template>

<script>
    import axios from "axios"
    export default {
      name:"Personagens" ,
      data() {
        return{
            personagens:"",
            teste:""
        }
      },

      methods: {
        async getPersonagens(){
            await axios.get("https://swapi.dev/api/people/").then((response)=>{
                this.personagens = response.data.results
            })
        }
      },

      created() {
        this.getPersonagens()
      },
    

    }
</script>