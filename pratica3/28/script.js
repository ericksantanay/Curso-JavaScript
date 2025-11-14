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
    nome.value = ''

    // Objeto, aqui é tipo os itens dentro de um pacotinho e o array é o armario
    let dados = {
        Nome: nome,
        Telefone: telefone
    }

    // Metodo Push, serve para eu pegar o bjeto e por no array a minha "lista"
    bancoDeDados.push(dados)

    bancoDeDados.forEach(item => {
    let nome = 
        r.innerHTML += `<div><p>${item.Nome} <br> ${item.Telefone}  <span></span></p></div>`
    });

}