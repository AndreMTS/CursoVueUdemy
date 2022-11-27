new Vue({
    el: '#desafio',
    data: {
        valor: 0
    },
    methods: {
        
    },
    computed:{
        resultado() {                
            return this.valor != 37 ? 'diferente de 37' : 'Valor Igual a 37'

        }
    },
    watch:{
        resultado(novo,antigo){
            if(novo === 'Valor Igual a 37'){
                setTimeout(() =>{
                    this.valor = 0
                },2000)
            }
        }
    }
});