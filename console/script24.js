// Acesso ao sistema
let usuario = 'Inativo'
let senha = 'Certo'

if (usuario === 'Inativo' && senha === 'Errado') {
    console.log('Acesso Negado')
}else if (usuario === 'Ativo' && senha === 'Certo') {
    console.log('Acesso Permitido')
}else {
    console.log('Acesso Negado')
}