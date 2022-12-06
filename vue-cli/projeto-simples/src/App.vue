<template>
  <div>Ola Mundo</div>
  <hr>
  <Contador> </Contador>
</template>

<script>
import Contador from './components/Contador.vue'
export default {
    name: 'App',
    components: {Contador}
}
</script>
'

<style>
div{
  font-size:50px;
}
</style>