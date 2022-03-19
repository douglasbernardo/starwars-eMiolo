<template>
    <div>
        <h1>Formulario de login</h1>
        <Input label="Nome:" type="text" placeholder="Seu nome"/>
        <Input label="Email:" type="email" placeholder="Seu e-mail"/>
        <Input label="Senha:" type="password" placeholder="Sua senha"/>    
    </div>
</template>


<script>
    import Input from "../components/Input.vue"

    export default {
        name:"Login",
        components:{
            Input
        }
    }
</script>