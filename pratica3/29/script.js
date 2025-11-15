// O que o usuario vai ver 
let result = document.getElementById('mensagem')
let me = document.getElementById('media')
// Array aonde vou Armazenar as listas 
let bancoDeDados = []



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
    if (Nome === '') {
        alert('Preencha os campos abaixo')
        return
    }

    // Divisor da nota
    let totalProvas = 3
    // Conta
    let conta = (n1 +  n2 + n3) / totalProvas; // Ajustar depois
    
    // Aprovado ou reprovado
    if (conta >= 5) {
        me.innerText = ('aprovado')
    }else {
        me.innerText = ('reprovado')
    }
     
     
    // Guardar os dados no navegador 
    localStorage.setItem('banco', JSON.stringify(bancoDeDados))

    // Para não ter o problema de repetir os dados
    result.innerHTML = ''

    // Objeto com os dados
    let dados = {
        nome: Nome,
        nota1: n1,
        nota2: n2,
        nota3: n3
    }

    // Agora eu tenho  que puchar o dados no array "Lista"
    bancoDeDados.push(dados)


    // Laço de repetição que vai percorrer o array inteiro 
    bancoDeDados.forEach((item, indice) => {
        result.innerHTML += `
                <div id="containerTxt">
                <p>Nome do aluno: ${item.nome}</p>
                <p>Notas: Nota1: ${item.nota1}, Nota2: ${item.nota2}, Nota3: ${item.nota3}</p>
                <p>Media do aluno: ${conta.toFixed(2)}</p>
                <p>Aprovado/Reprovado: ${conta}}</p>
                <span class="material-symbols-outlined" onclick="deletar(${indice})">delete</span>
                </div>
                `
    });

    // Parte quando o usuario digitar e clicar noo botão o campo irá ficar limpo para digitar novamente
    document.getElementById('nome').value = ''
    document.getElementById('nota1').value = ''
    document.getElementById('nota2').value = ''
    document.getElementById('nota3').value = ''
    
}


// Função de apagar
function deletar(indice) {
    // Para não ter o problema de repetir os dados
    result.innerHTML = ''
    bancoDeDados.splice(indice, 1)

    bancoDeDados.forEach(item, (indice) => {
        result.innerHTML += `
                <div id="containerTxt">
                <p>Nome do aluno: ${item.nome}</p>
                <p>Notas: Nota1:${item.nota1}, Nota2:${item.nota2}, Nota3:${item.nota3}</p>
                <p>Media do aluno: ${conta.toFixed(2)}</p>
                <p id="media">Aprovado/Reprovado:</p>
                <span class="material-symbols-outlined" onclick="deletar(${indice})">delete</span>
                </div>
                `
    });

}
