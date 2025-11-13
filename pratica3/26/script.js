let r = document.getElementById('res')
let t = document.getElementById('total')

let armazem = []

// Função de click
    function Adicionar() {
        //Input produto
        let Produto = document.getElementById('iproduto').value
        // Input Preço
        let Preco = Number(document.getElementById('ipreco').value)


        // Eu coloco as ' ' para nao repetir o produto
        r.innerHTML = '' 

        // Objeto, serve como um pacotinho para deixar organizado no armazem 
        let pacotinho = {produto: Produto, preço: Preco}

         // Push serve para guardar o objeto dentro do array
        armazem.push(pacotinho)

        

        // Laço de repetição
        armazem.forEach(item => {
            r.innerHTML += `<p>${item.produto}  ${item.preço}</p>`
            t.innerHTML = (item.preço)
        });
    }