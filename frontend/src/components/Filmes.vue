<template>
    <div>
        <div class="container">
            <div class="box" v-for="filme in filmes" :key="filme.id">
                <p> Título:{{filme.title}}</p>
                <p> Descrição:{{filme.opening_crawl}}</p> 
                <p> Data:{{filme.release_date}}</p>
            </div>
        </div>
        <!-- <p v-for="filme in filmes" :key="filme.id">
            {{filme.title}} - {{filme.opening_crawl}} - {{filme.release_date}}
            title,
            opening_crawl,
            release_data, 
        </p> -->
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


    .container{
        display: flex;
        width: 100%;
        flex-wrap: wrap;
        flex-direction: row;
    }
    .box{
        display: flex;
        height: 500px;
        flex-wrap: wrap;
        width: 30%;
        margin: 15px;
        padding:10px;
        justify-items: center;
        justify-content: center;
        background: black;
    }

    .box p{
        margin:10px;
        color: antiquewhite;
        font-size: 20px;
    }
</style>