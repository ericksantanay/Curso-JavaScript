// Pega o dia 
let data = new Date()
console.log(data)

// Para pegar o ano eu faço o seguinte

// Esse pega o ano atual com 4 digitos
let ano = data.getFullYear()
console.log(ano)


// Pegar o mes de 0 até 11 sendo 0 janeiro e 11 dezembro
let mes = data.getMonth()
console.log(mes)

//Mostrar o mes no formato escrito
const mesesDoAno = ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];
let mesEscrito = mesesDoAno[data.getMonth()]
console.log(mesEscrito)

// Pegar dia do mes de 1 até 31

let diaMes = data.getDate()
