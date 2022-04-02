<template>
    <div>
        <h1>Bem vindo ao StarWars Force</h1>
        <nav>
            <router-link :to="{ name:'Personagens' }"><p>Personagens</p></router-link>
            <router-link :to="{ name: 'Filmes' }"><p>Filmes</p></router-link>
            <router-link to=""><p>Veículos</p></router-link>
        </nav>
    </div>
</template>

<script>
    export default {
        name:"Home",
    }
</script>

<style scoped>
    h1{
        font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
        text-align: center;
    }
    nav{
        flex-direction: row;
        display: flex;
        justify-content: center;
    }
    nav p{
        font-size: 20px;
        margin: 10px;
        text-align:center;
        font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    }
</style>