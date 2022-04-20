<template>
    <div>
        <div>
            <h2>Lista de Personagens</h2>
            <table>
                <tr>
                    <th>Nome dos Personagens:</th>
                    <th>Mais Sobre</th>
                </tr>
                <tr 
                    v-for="character in characters" 
                    :key="character.id">
                    <td>
                        {{character.name}}
                    </td>
                    <router-link :to="{name:'AboutCharacters',params:{id:character.url.slice(29,-1)}}">Mais</router-link>
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
      name:"Characters" ,
      data() {
        return{
            characters:"",
        }
      },
      created: async function () {
        await axios.get("https://swapi.dev/api/people/").then((response)=>{
            this.characters = response.data.results
        })
      },
    

    }
</script>