<template>
    <div>
        <label>
            {{ label }}
            <input :type="type" :name="name" :placeholder="placeholder"/>
        </label>
    </div>
</template> 

<script>
    export default {
        name:"Input",
        props:{
            label:{
                type: String,
                required: false,
            },
            name:{
                type:String,
                required: true
            },
            type:{
                type:String,
                required:true
            }, 
            placeholder:{
                type:String,
                required:true
            }
        }
    }
</script>