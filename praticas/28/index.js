function mostrar() {
    let ip = Number(document.getElementById('iest').value)
    let r = document.getElementById('res')

    if (ip == 12 || ip == 1 || ip == 2) {
        r.innerText = ('Verão')
    }else if (ip == 3 || ip == 4 || ip == 5) {
        r.innerText = ('Outono')
    }else if (ip == 6 || ip == 7 || ip == 8) {
        r.innerText = ('Inverno')
    }else if (ip == 9 || ip == 10 || ip == 11) {
        r.innerText = ('Primavera')
    }else {
        alert('[ERRO]')
    }
}