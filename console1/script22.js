// Empréstimo 
let salario = 6000
let nomeLimpo = 'Limpo'

if (salario < 3000 && nomeLimpo == 'Sujo') {
    console.log('Emprestimo Negado')
}else if (salario >= 3000 && nomeLimpo == 'Sujo') {
    console.log('Emprestimo em Analise!')
}else if (salario >= 3000 && nomeLimpo == 'Limpo') {
    console.log('Emprestimo Aprovado!')
}