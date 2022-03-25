<template>
    <div>
        <p>{{filmes}}</p>
    </div>
</template>

<script>
import axios from "axios"
    export default {
        name:"Filmes",
        data(){
            return{
                filmes:""
            }
        },
        methods: {
            async showFilmes(){

                await axios.get("https://swapi.dev/api/films/").then((response)=>{
                    this.filmes = response.data.results
                })
            }
        },
        created(){
            this.showFilmes()
        }
    }
</script>

<style scoped>

</style>