
// OBJETO

let carro  = {
    marca: "Fiat",
    modelo: "Uno",
    ano: 2001
}

// TRANSFORMANDO OBJETO EM TEXTO
let texto = JSON.stringify(carro)
let r = document.getElementById('area')
r.innerText = (texto)
