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
        r.innerHTML += `<p style="width: max-content; border: 1px solid black; padding: 10px;">Nome: ${item.nome} 
        <span id="del" class="material-symbols-outlined" onclick="deletar(${indice})">delete</span>
        </p>`
    });
}


// Função
function Adicionar() {
    let input = document.getElementById('pesquisa').value

    if (input === '') {
        alert('PREENCHA O CAMPO')
        return
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

// Função de deletar
function deletar(indice) {

    armazemNomes.splice(indice, 1)

    norepet() 
}

// Função de Buscar
function Buscar() {
    let letra = document.getElementById('pesquisa').value.toLowerCase()

    if (letra === '') {
        alert('Digite uma letra para buscar')
        return
    }

    // Filtra os nomes que começam com a letra digitada
    let filtrados = armazemNomes.filter(item =>
        item.nome.toLowerCase().startsWith(letra)
    )

    // Exibir apenas os filtrados
    r.innerHTML = ''

    filtrados.forEach((item, indice) => {
        r.innerHTML += `
            <p style="width: max-content; border: 1px solid black; padding: 10px;">
                Nome: ${item.nome}
            </p>
        `
    })
}
