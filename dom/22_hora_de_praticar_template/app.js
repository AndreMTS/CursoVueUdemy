new Vue({
    el: '#desafio',
    data: {
        nome: 'Andre Matos',
        idade: 32,
        multiplicar:'',
        numeroAleatorio:'',
        linkImg: 'https://webkit.org/demos/srcset/image-src.png',
        meunome:'Andre'
    },
    created:{},
    methods:{
        multiplicarIdade (){
            multiplicar = this.idade * 3
            return multiplicar
        },
        getNumeroAleatorio(){
            numeroAleatorio = Math.floor((Math.random() * 10))
            return numeroAleatorio
        }
    }
})