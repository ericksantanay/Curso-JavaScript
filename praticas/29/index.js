function mostrar() {
    let ip = Number(document.getElementById('iest').value)
    let r = document.getElementById('res')

    if (ip >= 1 && ip < 12) {
        r.innerText = ('Criança')
    }else if (ip >= 12 && ip <= 17) {
        r.innerText = ('Adolecente')
    }else if (ip >= 18 && ip <= 59) {
        r.innerText = ('Adulto')
    }else if (ip >= 60) {
        r.innerText = ('Idoso')
    }else {
        alert('ERRO')
    }
}