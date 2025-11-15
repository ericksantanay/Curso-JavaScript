// O que o usuario vai ver 
let result = document.getElementById('mensagem')

// Função de cadastro!
function cadastrar() {
    // Input Nome do aluno
    let nome = document.getElementById('nome').value
    //Input Nota 1 
    let nota1 = Number(document.getElementById('nota1').value)
    //Input Nota 2 
    let nota2 = Number(document.getElementById('nota2').value)
    //Input Nota 3 
    let nota3 = Number(document.getElementById('nota3').value)

    // Condições se o usuario nao digitar nada 
    if (nome === '' || nota1 === '' || nota2 === '' || nota3 === '') {
        alert('Preencha os campos abaixo')
    }





    // Parte quando o usuario digitar e clicar noo botão o campo irá ficar limpo para digitar novamente
    document.getElementById('nome').value = ''
    document.getElementById('nota1').value = ''
    document.getElementById('nota2').value = ''
    document.getElementById('nota3').value = ''
}



















//localStorage('NomeUsuario', nome);