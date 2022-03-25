<template>
    <div>
        <h1>Olá,{{}}</h1>
        <p>seu token é: {{token}}</p>
        <p>seu id é: {{userId}}</p>
        <span>
            clique para ver todos os usuarios cadastrados em nosso sistema
            <router-link to="/home/usuarios">
                <p>usuarios</p>
            </router-link>
        </span> 
    </div>
</template>


<script>
    export default {
        name:"Home",
        data(){
            return{
                user:"",
                token:localStorage.getItem("token"),
                userId:localStorage.getItem("userId")
            }
        }
    }
</script>