let r = document.getElementById('res')
let t = document.getElementById('total')

let armazem = []


// Função de click
    function Adicionar() {
        //Input produto
        let produto = document.getElementById('iproduto').value
        // Input Preço
        let preco = Number(document.getElementById('ipreco').value)

        // Objeto, serve como um pacotinho para deixar organizado no armazem 
        let pacoteDeDados = {
            Produto: produto,
            Preço: preco
        }

        // Eu coloco as ' ' para nao repetir o produto
         

        // Push serve para guardar o objeto dentro do array
        armazem.push(pacoteDeDados)

        // Laço de repetição
        array.forEach(element => {
            
        });
    }