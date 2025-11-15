// O que o usuario vai ver 
let result = document.getElementById('mensagem')


// Array aonde vou Armazenar as listas 
// Carregar banco do localStorage
let bancoDeDados = JSON.parse(localStorage.getItem('banco')) || []


// Função de cadastro!
function cadastrar() {
    // Input Nome do aluno
    let Nome = document.getElementById('nome').value
    //Input Nota 1 
    let n1 = Number(document.getElementById('nota1').value)
    //Input Nota 2 
    let n2 = Number(document.getElementById('nota2').value)
    //Input Nota 3 
    let n3 = Number(document.getElementById('nota3').value)

    // Condições se o usuario nao digitar nada 
     if (Nome === '' || isNaN(n1) || isNaN(n2) || isNaN(n3)) {
        alert('Preencha todos os campos!')
        return
    }

    // Conta
    let media = (n1 +  n2 + n3) / 3; // Ajustar depois

    // Situação do aluno
    let situacao = media >= 5 ? 'Aprovado' : 'Reprovado'
     
    // Objeto com os dados
    let dados = {
        nome: Nome,
        nota1: n1,
        nota2: n2,
        nota3: n3,
        media: media,
        situação: situacao
    }

    // Agora eu tenho  que puchar o dados no array "Lista"
    bancoDeDados.push(dados)

    // Guardar os dados no navegador 
   // SALVAR no localStorage corretamente
    localStorage.setItem('banco', JSON.stringify(bancoDeDados))

    // Esse é o mostrar do laço de repetição
    mostrar()

    // Parte quando o usuario digitar e clicar noo botão o campo irá ficar limpo para digitar novamente
    document.getElementById('nome').value = ''
    document.getElementById('nota1').value = ''
    document.getElementById('nota2').value = ''
    document.getElementById('nota3').value = ''
}


// Função de apagar
function deletar(indice) {
   bancoDeDados.splice(indice, 1)
    localStorage.setItem('banco', JSON.stringify(bancoDeDados))
    mostrar()
}

function mostrar() {
    result.innerHTML = ''

    // Aqui é  o laço de repetição!!!
    bancoDeDados.forEach((item, indice) => {
        result.innerHTML += `
            <div id="containerTxt">
                <p><strong>Aluno:</strong> ${item.nome}</p>
                <p>Notas: ${item.nota1}, ${item.nota2}, ${item.nota3}</p>
                <p>Média: ${item.media.toFixed(2)}</p>
                <p>Situação: <strong>${item.situacao}</strong></p>
                <span class="material-symbols-outlined" onclick="deletar(${indice})">delete</span>
            </div>
        `
    })
}


// Mostrar na tela ao abrir a página
mostrar()
