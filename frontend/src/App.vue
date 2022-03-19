<template>
  <div>
    <NavBar :logo="logo_src" :alt="app_name"/>
    <router-view/>
  </div>
</template>

<script>
  import NavBar from "./components/NavBar.vue"

  export default {
    name: 'App',
    components:{
      NavBar,
    },
    data() {
      return {
        logo_src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe_1tCHlJ7cpwjb5i9w_BV1QTWCTSsXOZUUlBATwRO0G7823aPBc-1ZutyZPCA6jklaQI&usqp=CAU",
        app_name:"Logo do starwars"
      }
    },
  }
</script>

<style>
  
</style>
