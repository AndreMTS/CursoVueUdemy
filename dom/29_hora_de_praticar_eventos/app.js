new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        alertaClick(){
            alert('Alerta disparado')
        },
        escutarEvento(event){
            this.valor = event.target.value
        }
    }
})