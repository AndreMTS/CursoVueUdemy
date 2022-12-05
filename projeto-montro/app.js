new Vue({
    el: '#app',
    data: {
        partidaAtiva: false,
        vidaJogador: 100,
        vidaMonstro: 100,
        logs: []
    },
    computed: {
        mostraResultado() {
            return this.vidaJogador == 0 || this.vidaMonstro == 0
        }

    },
    methods: {
        startGame() {
            this.partidaAtiva = true
            this.vidaJogador = 100
            this.vidaMonstro = 100
            this.logs = []
        },
        ataque(especial) {
            this.ferir('vidaMonstro', 5, 10, especial, 'jogador', 'monstro', 'classeJogador') // Monstro estara sucessível a tomar ou nao um ataque especial
            if (this.vidaMonstro > 0) {
                this.ferir('vidaJogador', 7, 12, false, 'mostro', 'jogador', 'classeMonstro') //jogador levara mais dado normalmente
            }
        },
        ferir(propriedade, minimo, maximo, especial, origem, alvo, classe) {
            const ataqueForte = especial ? 5 : 0
            const ferir = this.gerarNumeroAleatorio(minimo + ataqueForte, maximo + ataqueForte)
            this[propriedade] = Math.max(this[propriedade] - ferir, 0) //garantir que life do Player nunca seja negativo
            this.registrarLog(`${origem} atingiu o ${alvo} com ${ferir}.`, classe)
        },
        curarEferir() {
            this.curar(10, 15)
            this.ferir('vidaJogador', 7, 12, false, 'monstro', 'jogador', 'classeMonstro')
        },
        curar(minimo, maximo) {
            const curar = this.gerarNumeroAleatorio(minimo, maximo)
            this.vidaJogador = Math.min(this.vidaJogador + curar, 100)
            this.registrarLog(`Jogador ganhou força de ${curar}`, 'classeJogador')
        },
        gerarNumeroAleatorio(minimo, maximo) {
            const valor = Math.random() * (maximo - minimo) + minimo
            return Math.round(valor)
        },
        registrarLog(texto, classe) {
            this.logs.unshift({ texto, classe })
        }

    },
    watch: {
        mostraResultado(valor) {
            if (valor === true) {
                this.partidaAtiva = false
            }
        }
    }
})