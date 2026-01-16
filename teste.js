
// Abas Saidas 

let aba1 = document.getElementById('aba1')
let aba2 = document.getElementById('aba2')
let aba3 = document.getElementById('aba3')
let aba4 = document.getElementById('aba4')
let aba5 = document.getElementById('aba5')

let dieta = document.getElementById('dieta')


// Divs
let div1 = document.getElementById('containerIconeTreino')

let div2 = document.getElementById('containerIconeDieta')

div1.style.backgroundColor = 'green'

function abaUm() {
    aba1.style.display = 'block'


    aba2.style.display = 'none'
    aba3.style.display = 'none'
    aba4.style.display = 'none'
    aba5.style.display = 'none'

  
    div1.style.backgroundColor = 'green'
    div2.style.backgroundColor = 'white'
}   



function abaDois() {
    aba2.style.display = 'block'
    aba1.style.display = 'none'
    aba3.style.display = 'none'
    aba4.style.display = 'none'
    aba5.style.display = 'none'

    div1.style.backgroundColor = 'white'
    div2.style.backgroundColor = 'green'
}