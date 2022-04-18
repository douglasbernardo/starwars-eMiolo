<template>
    <div>
      <button class="btn">{{text}}</button>
    </div>
</template>


<script>
    export default {
      name:"Button",
      props:{
        text: {
          type:String,
          required:true
        }
      },
    }
</script>
<style scoped>
  .btn{
    color: black;
    height: 30px;
    background-color: #800000;
    text-justify: inter-word;
    border-radius: 40px 40px 40px 40px;
    width: 200px;
    margin-left: 12%;
    border: none;
    text-align: center;
    cursor: pointer;
  }

  .btn:hover{
    background-color: #8B0000;
  }
</style>