let tempo = document.getElementById('tempo')

    let data = new Date()
    let hora = data.getHours()
    if (hora >= 5 && hora < 12 ) {
        tempo.innerText = ('BOM DIA!!')
    }else if (hora > 12 || hora < 18)




let nome = document.getElementById('ipnome').value

let r = document.getElementById('saudacao')

r.innerText = (`Ola ${nome}`)