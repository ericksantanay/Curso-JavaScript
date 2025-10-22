let tempo = document.getElementById('tempo')

    let data = new Date()
    let hora = data.getHours()

let nome = document.getElementById('ipnome').value

let r = document.getElementById('saudacao')

r.innerText = (`Ola ${nome}`)