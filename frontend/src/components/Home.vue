<template>
    <div>
        <h1>Hello usuario</h1>
        <p>seu token é: {{token}}</p>
    </div>
</template>


<script>
    export default {
        name:"Home",
        data(){
            return{
                token: localStorage.getItem("token")
            }
        }
    }
</script>