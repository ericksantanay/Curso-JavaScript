function cadastro() {
    var ip1 = document.getElementById('inome').value
    var ip2 = Number(document.getElementById('iidade').value)
    var r = document.getElementById('res')

const cao = {
    nome: ip1,
    idade: ip2,
    
  }
  r.innerText = (`O seu cão ${ip1} com idade de ${ip2} foi cadastrado(a)`)
}

 