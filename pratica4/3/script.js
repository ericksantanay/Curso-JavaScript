//Puxando o menu hamburguer para adicionar um X
let m = document.getElementById('hamburguer')
// Parte do Menu
function ClickMenu() {
    if (menu.style.display == 'block') {
        menu.style.display = 'none'
        m.innerText = 'shopping_cart'
    }else {
        menu.style.display = 'block'
        m.innerText = 'close'
    }
}

// Parte dos produtos
// Função

// Array, aonde vou armazenar a lista!! 
let caixa = []

function cart() {
    // Input Produto
    let produto = document.getElementById('iproduto').value
    let preco = document.getElementById('ipreco').value
    let r = document.getElementById('res')

    // Parte da verificação!
    if (produto === '' || preco === '') {
        alert('Preencha os campos.')
    }

    // Parte para não repetir os produtos e o preço
    r.innerHTML = ''

    // Parte do objeto, que vai ser armanezado no Array
    let pacote = {
        produto: produto,
        preco: preco
    }

    // Parte do push, para por o objeto no array
    caixa.push(pacote)

    // Parte do forEach, que vai proucurar os produtos e o preço pelo indice
    caixa.forEach(element => {
        
    });

}
