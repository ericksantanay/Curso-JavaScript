    // Array
    let dados = []

    //Saida dos produtos e os preços
    let r = document.getElementById('res')

    // Total do produto
    let total = document.getElementById('total')


    Total = 0
    function Adicionar() {

    //Puxando os inputs
    let Nome = document.getElementById('inome').value
    let Preco = Number(document.getElementById('ipreco').value)


    // Objeto 
    let compra = {
        nome: Nome,
        preço: Preco
    }

    // Atualizar lista
      r.innerHTML = '';
      let soma = 0;


    // Adicionando o Push
    dados.push(compra)

         dados.forEach((item) => {
        r.innerHTML += `<p>${item.nome} — R$ ${item.preco.toFixed(2)}</p>`;
        soma += item.preco; // acumula o total
      });

       // Mostrar total
      total.innerText = `💰 Total: R$ ${soma.toFixed(2)}`;
}