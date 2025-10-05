const r = document.getElementById('res')

const cardapio = ["Hambúrguer", "Batata", "Refrigerante", "Sobremesa"]


cardapio.push("Cachorro-Quente")
cardapio.shift()
r.innerText = cardapio.join(",")
