// Aqui é aonde vai sair o resultado 
let r = document.getElementById('res')

// Array (Armazem)
let armazemNomes = []


// Função para não repeir codigo
function norepet() {
    
    // Para não repetir
    r.innerHTML = '';

    // ForEach
    armazemNomes.forEach((item, indice) => {
        r.innerHTML += `<p>Nome: ${item.nome} 
        <span class="material-symbols-outlined" onclick="deletar(${indice})">delete</span>
        </p>`
    });
}


// Função
function Adicionar() {
    let input = document.getElementById('pesquisa').value

    if (input === '') {
        alert('PREENCHA O CAMPO')
    }

    // Dados 
    let nomes = {
        nome: input
    }

    // Trazendo o obj para o array
    armazemNomes.push(nomes)

    norepet() 

    document.getElementById('pesquisa').value = ''
}


function deletar(indice) {

    armazemNomes.splice(indice, 1)
    
    norepet() 
}