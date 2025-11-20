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

// Saidas
let r = document.getElementById('res')
let t = document.getElementById('total')


function cart() {
    // Input Produto
    let produto = document.getElementById('iproduto').value
    let preco = document.getElementById('ipreco').value
    

    // Parte da verificação!
    if (produto === '' || preco === '') {
        alert('Preencha os campos.')
    }

    soma = 0

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
    caixa.forEach(item => {
        r.innerHTML += 
        `
        <article>
            <p>Produto: ${item.produto}</p>
            <p>Preço:   ${item.preco.toFixed(2)}</p>
        </article>
        `
        t.innerHTML += `<p id="total">Total: ${soma}</p>`
        soma += item.preco
    });




    document.getElementById('iproduto').value = ''
    document.getElementById('ipreco').value = ''

}
