let imagens = document.querySelectorAll('.slide') // todas as imagens
let indice = 0 // começa na primeira imagem

function proximaImagem() {
  imagens[indice].style.display = 'none' // esconde a atual
  indice = (indice + 1) % imagens.length // vai pra próxima (e volta pro início no final)
  imagens[indice].style.display = 'block' // mostra a próxima
}

function imagemAnterior() {
  imagens[indice].style.display = 'none'
  indice = (indice - 1 + imagens.length) % imagens.length // volta uma imagem
  imagens[indice].style.display = 'block'
}
