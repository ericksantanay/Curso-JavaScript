    // Array
    let dados = []

    //Saida dos produtos e os preços
    let r = document.getElementById('res')

    // Total do produto
    let total = document.getElementById('total')


    function Adicionar() {

    //Puxando os inputs
    let Nome = document.getElementById('inome').value
    let Preco = Number(document.getElementById('ipreco').value)


    // Objeto 
    let compra = {
        nome: Nome,
        preço: Preco
    }

    // Adicionando o Push
    dados.push(compra)

    // Primeira saida 
        r.innerText = ` ${nome} -- R$${preço}` 


}