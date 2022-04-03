<template>
    <div>
        <div>
            <h2>Lista de Personagens</h2>
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
        }
      },
      created: async function () {
        await axios.get("https://swapi.dev/api/people/").then((response)=>{
            this.personagens = response.data.results
        })
      },
    

    }
</script>