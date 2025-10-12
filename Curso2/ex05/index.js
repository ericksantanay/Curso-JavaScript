/*
function ativar() {
let r = document.getElementById('res')

    tempo = setTimeout(function(){

    r.innerText = ('Contou 5s')
    document.body.style.backgroundColor = 'blue'

    }, 5000) 

}


function para() {
    clearTimeout(tempo)
    r.innerText = ('Parou a contagem')
}
 */

function ativar() {
    setInterval(function (){
    var cronometro = document.getElementById('res')
    var soma = parseInt(cronometro) + 1;

    document.getElementById('res').innerHTML = soma
    
}, 1000) 
}