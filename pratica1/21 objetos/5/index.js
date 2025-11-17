const moto =  {
    marca: "BMW",
    modelo: "R1250GS",
    ano: 2019,

    ligar: function() {
        console.log(`A Moto ${this.marca} ${this.modelo} esta ligada`)
    },

    desligar: function() {
        console.log(`A moto foi desligada`)
    }
}

console.log(moto.marca)
console.log(moto.modelo)
console.log(moto.ano)
moto.ligar()
moto.desligar()
