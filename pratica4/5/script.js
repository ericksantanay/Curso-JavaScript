// Aqui é aonde vai sair o resultado 
let r = document.getElementById('res')

// Array (Armazem)
let armazemNomes = []

// Função
function Adicionar() {
    let input = document.getElementById('pesquisa').value

    if (input === '') {
        alert('PREENCHA O CAMPO')
    }

    // Para não repetir
    r.innerHTML = '';

    // Dados 
    let nomes = {
        nome: input
    }

    // Trazendo o obj para o array
    armazemNomes.push(nomes)

    // ForEach
    armazemNomes.forEach(item => {
        r.innerHTML += `<p>Nome: ${item.nome}</p>`
    });

}