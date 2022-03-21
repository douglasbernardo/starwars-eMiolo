<template>
  <div>
    <div id="nav">
      <router-link id="logo-url" to="/">
        <img id="logo" :src="logo" :alt="alt">
      </router-link>
    </div>
  </div>
</template>

<script>
    export default {
      name: "Navbar",
      props: ["logo", "alt"]
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
</style>