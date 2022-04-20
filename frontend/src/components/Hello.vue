<template>
  <div class="hello">
    <h1>Bem vindo </h1>
    <p>
      Faça o login para ter acesso à funções da api do starwars
      <router-link to="/login">Login</router-link>
    </p>
  </div>
</template>

<script>
  export default {
    name: 'Hello',
    props: {
      msg: String
    }
  }
</script>

<style scoped>
  h3 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>
