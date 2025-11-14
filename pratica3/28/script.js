// Aonde vai aparecer o conteudo
const r = document.getElementById('res')

// Aonde eu vou guardar a lista 
let bancoDeDados = []

// Função de adicionar 
function adicionar() {
    // Input nome
    let nome = document.getElementById('inome').value
    // Input Telefone
    let telefone = Number(document.getElementById('itelefone').value)


    // Para não repetir as listas
    r.innerHTML = ''

    // Objeto, aqui é tipo os itens dentro de um pacotinho e o array é o armario
    let dados = {
        Nome: nome,
        Telefone: telefone
    }

    // Metodo Push, serve para eu pegar o bjeto e por no array a minha "lista"
    bancoDeDados.push(dados)
    

    // Laço de repetição que vai percorrer o array até achar o indice
    bancoDeDados.forEach((item, indice) => {
        r.innerHTML += `<div>
        <p>Nome: ${item.Nome} <br> Telefone: ${item.Telefone}  
        <button onclick='apagar()'><span class="material-symbols-outlined">delete</span></button></p>
        </div>`
    });

    
    document.getElementById('inome').value = ''
    document.getElementById('itelefone').value = ''
}

    function apagar(indice) {
        r.innerHTML = ''
        bancoDeDados.splice(indice, 1)

        bancoDeDados.forEach((item, indice) => {
        r.innerHTML += `<div>
        <p>Nome: ${item.Nome} <br> Telefone: ${item.Telefone}  
        <button onclick='apagar()'><span class="material-symbols-outlined">delete</span></button></p>
        </div>`
    });

    document.getElementById('inome').value = ''


    }