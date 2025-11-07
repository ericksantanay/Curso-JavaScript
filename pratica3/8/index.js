// 1. Array de Carrinho (Nosso modelo de dados)
let carrinho = [];

// 2. Função principal que é chamada ao clicar no botão "Adicionar"
function adicionarAoCarrinho(produtoId) {
    // Achar o elemento HTML do produto clicado para pegar seus dados
    const produtoElemento = document.querySelector(`.produto-item[data-id="${produtoId}"]`);

    if (!produtoElemento) return; // Se não achar, sai da função

    // Pegar os dados (Nome, Preço, Imagem, etc.) usando dataset
    const novoItem = {
        id: produtoId,
        nome: produtoElemento.dataset.nome,
        preco: parseFloat(produtoElemento.dataset.preco),
        imagem: produtoElemento.dataset.imagem,
    };

    // Lógica para verificar se já existe no carrinho (a mesma de antes)
    const itemExistente = carrinho.find(item => item.id == novoItem.id);

    if (itemExistente) {
        itemExistente.quantidade++;
    } else {
        carrinho.push({ ...novoItem, quantidade: 1 });
    }

    renderizarCarrinho();
}

// 3. Função para desenhar o carrinho na tela (incluindo a imagem)
function renderizarCarrinho() {
    const container = document.getElementById('lista-carrinho-container');
    const totalElement = document.getElementById('total-carrinho');
    
    // 1. Limpa o contêiner antigo
    container.innerHTML = '';
    let totalGeral = 0;

    // 2. Itera sobre cada item no array 'carrinho'
    carrinho.forEach(item => {
        const subtotal = item.preco * item.quantidade;
        totalGeral += subtotal;

        // **Cria a estrutura de exibição com a imagem**
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('carrinho-item'); // Adiciona uma classe para estilização

        itemDiv.innerHTML = `
            <img src="${item.imagem}" alt="${item.nome}" class="carrinho-imagem">
            <div class="info-carrinho">
                <h4>${item.nome}</h4>
                <p>Preço Unit.: R$ ${item.preco.toFixed(2)}</p>
                <p>Quantidade: <span>${item.quantidade}</span></p>
                <p>Subtotal: <strong>R$ ${subtotal.toFixed(2)}</strong></p>
            </div>
            `;
        
        container.appendChild(itemDiv);
    });

    // 3. Atualiza o total
    totalElement.textContent = `R$ ${totalGeral.toFixed(2)}`;
}

// Inicializa o carrinho vazio na primeira carga
renderizarCarrinho();