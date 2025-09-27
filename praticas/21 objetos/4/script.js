const cachorro = {
    nome: "Jussara",
    raça: "Pastor Alemão",

    latir: function() {
        console.log('Au Au')
    },

    apresenta: function() {
        console.log(`Meu nome é ${this.nome} e a minha raça é ${this.raça}`) // Eu tenho que por o this. para o js saber o que eu quero mostrar
        }   
}

console.log(cachorro["nome"])
console.log(cachorro["raça"])
cachorro.latir()
cachorro.apresenta()
