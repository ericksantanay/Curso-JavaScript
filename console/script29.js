/* Acesso completo
Dados: usuarioAtivo, senhaCorreta, bloqueado
Defina se o acesso é permitido, negado ou bloqueado.
*/

let usuario = 'Ativo'
let senha = 'Errado'

if (usuario === 'Ativo' && senha === 'Correta') {
    console.log('Acesso Permitido')
}else if (usuario === 'Inativo'){
    console.log('Acesso Bloqueado ')
}else {
    console.log('Acesso Negado')
}
