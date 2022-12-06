<template>
    <div>
        <p>Contador: {{contador}}</p>
        <button @click="adicionar">+</button>        
        <button @click="subtrair">-</button>        
    </div>    
</template>

<script>
export default {
    name:'Contador',
    data(){
        return {
            contador:0
        }
    },
    methods:{
        adicionar(){
            this.contador++
        },
        subtrair(){
            this.contador--
        }
    }    
}
</script>

<style>

</style>