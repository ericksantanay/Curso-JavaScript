/* 
Jogo online

Dados: internet, banido
Defina se pode jogar.
*/

let internet = true 
let banido = true

if (internet === true && banido === false) {
    console.log('Pode jogar!')
}else if (internet === true && banido === true) {
    console.log('Voce esta Banido!')
}else {
    console.log('Voce Não Pode Jogar!')
}