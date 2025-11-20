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

// Saidas
let r = document.getElementById('res')
let t = document.getElementById('total')

// Array, aonde vou armazenar a lista!! 
let caixa = []

// Função
function cart() {
    // Input Produto
    let Produto = document.getElementById('iproduto').value
    let Preco = Number(document.getElementById('ipreco').value)
    soma = 0

    // Parte da verificação!
    if (Produto === '') {
        alert('Preencha os campos.')
    }

    // Parte para não repetir os produtos e o preço
    r.innerHTML = ''

    // Parte do objeto, que vai ser armanezado no Array
    let pacote = {
        produto: Produto,
        preco: Preco
    }

    // Parte do push, para por o objeto no array
    caixa.push(pacote)

    // Parte do forEach, que vai proucurar os produtos e o preço pelo indice
    caixa.forEach(item => {
        r.innerHTML += 
        `
        <article>
            <p>Produto: ${item.produto}</p>
            <p>Preço: R$:${item.preco}</p>
        </article>
        `
        soma += item.preco  
    });

    t.innerHTML = `<p>Total: R$:${soma}</p>`
    
    document.getElementById('iproduto').value = ''
    document.getElementById('ipreco').value = ''

}
