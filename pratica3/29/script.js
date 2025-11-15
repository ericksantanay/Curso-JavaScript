// O que o usuario vai ver 
let result = document.getElementById('mensagem')

// Array aonde vou Armazenar as listas 
let localStorage.bancoDeDados = []

// Função de cadastro!
function cadastrar() {
    // Input Nome do aluno
    let nome = document.getElementById('nome').value
    //Input Nota 1 
    let n1 = document.getElementById('nota1').value
    //Input Nota 2 
    let n2 = document.getElementById('nota2').value
    //Input Nota 3 
    let n3 = document.getElementById('nota3').value

    // Condições se o usuario nao digitar nada 
    if (nome === '' || n1 === '' || n2 === '' || n3 === '') {
        alert('Preencha os campos abaixo')
        return
    }

    // Para não ter o problema de repetir os dados
    result.innerHTML = ''

    // Objeto com os dados
    let dados = {
        Nome: nome,
        Nota1: n1,
        Nota2: n2,
        Nota3: n3
    }

    // Agora eu tenho  que puchar o dados no array "Lista"
    bancoDeDados.push(dados)







    // Parte quando o usuario digitar e clicar noo botão o campo irá ficar limpo para digitar novamente
    document.getElementById('nome').value = ''
    document.getElementById('nota1').value = ''
    document.getElementById('nota2').value = ''
    document.getElementById('nota3').value = ''
}



















//localStorage('NomeUsuario', nome);