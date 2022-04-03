<template>
  <div>
    <div id="nav">
      <router-link id="logo-url" to="/">
        <img id="logo" :src="logo" :alt="alt">
      </router-link>
      <div v-if="userId">
        <nav>
          <router-link :to="{name:'Perfil',params:{id: userId }}">
            <p>seu perfil</p >
          </router-link>
          <router-link to="/home/usuarios">
            <p>usuarios</p>
          </router-link>
          <router-link to="/login" @click="logout">
            <p>Sair</p>
          </router-link>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      name: "Navbar",
      props: ["logo", "alt"],
      data(){
        return{
          userId: localStorage.getItem("userId"),
        }
      },
      methods: {
        async logout(){
          localStorage.removeItem("token")
          localStorage.removeItem("userId")
        }
      },
    }
</script>

<style scoped>
  #nav {
    background-color: #000;
    border-bottom: 4px solid #111;
    padding: 15px 50px;
    margin-top: -10px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  #nav #logo-url {
    margin: auto;
    margin-left: 0;
  }
  #logo {
    width: 50%;
    height: 50%;
    cursor:pointer;
  }
  img{
    cursor: pointer;
  }
  #nav a {
    color: #fcba03;
    text-decoration: none;
    margin: 12px;
    transition: .5s;
  }
  #nav a:hover {
    color: #FFF;
  }
  p{
    color:white;
  }
  div nav{
    display: flex;
  }
</style>