<template>
    <div>
        <div class="input-container">
            <label>
                {{ label }}
                <input 
                    :type="type" 
                    :name="name" 
                    :placeholder="placeholder"
                />
            </label>
        </div>
    </div>
</template> 

<script>
    export default {
        name:"Input",
        props:{
            label:{type: String,required: false,},
            name:{type:String,required: true},
            type:{type:String,required:true}, 
            placeholder:{type:String,required:true}
        }
    }
</script>


<style>
    input::placeholder{
        color: black;
        font-display:flex;
        font-size:15px;
        text-align: center;
    }
    input{
        font-size:20px;
        border-radius:7px;
    }
    .input-container {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    padding:0;
    text-align: center;
    height: 30;
    margin: 2;
  }
</style>