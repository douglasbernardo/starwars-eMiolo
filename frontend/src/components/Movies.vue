<template>
    <div>
        <div class="container">
            <div class="box" v-for="movie in movies" :key="movie.id">
                <p> <strong>Título:</strong> {{movie.title}}</p>
                <p> <strong>Descrição:</strong> {{movie.opening_crawl}}</p> 
                <p> <strong>Data:</strong> {{movie.release_date}}</p>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from "axios"
    export default {
        name:"Movies",
        data(){
            return{
                movies:""
            }
        },
        created: async function(){
            await axios.get("https://swapi.dev/api/films/").then((response)=>{
                this.movies = response.data.results
            })
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