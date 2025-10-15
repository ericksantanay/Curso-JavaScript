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
console.log(diaMes)


// Dia da semana 
let diaSemana = data.getDay()

// Macete
let diasDaSemana = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sabado"]
let diaDaSemanaEscrito = diasDaSemana[data.getDay()]
console.log(diaDaSemanaEscrito)


// Pegar a hora 
let hora = data.getHours()
const h = document.getElementById('ho')
h.innerText = (`${hora}`)

// Pegar os minutos
let minutos = data.getMinutes()
const m = document.getElementById('min')
m.innerText = (`${minutos}`)


// Pegar os Segundos
let segundos = data.getSeconds()
const s = document.getElementById('sec')
s.innerText = (`${segundos}`)

// Pegare os Milissegundo