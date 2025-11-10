function revelarAoRolar() {
  let elementos = document.querySelectorAll('.reveal');

  for (let i = 0; i < elementos.length; i++) {
    let alturaTela = window.innerHeight;
    let topoElemento = elementos[i].getBoundingClientRect().top;
    let visivel = 150; // Quanto antes ele começa a aparecer

    if (topoElemento < alturaTela - visivel) {
      elementos[i].classList.add('active');
    } else {
      elementos[i].classList.remove('active');
    }
  }
}

window.addEventListener('scroll', revelarAoRolar);
