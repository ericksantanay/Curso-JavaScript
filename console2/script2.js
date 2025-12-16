/*
Acesso noturno

Dados: horario, autorizado
Defina se o acesso é permitido.

*/

let horario = 7
let autorização = true 

if (horario >= 1 && horario < 5 && autorização === true) {
    console.log('Acesso Permitido!')
}else {
    console.log('Acesso Negado!')
}