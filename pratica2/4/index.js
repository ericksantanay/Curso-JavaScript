function verificar() {
    const ip = Number(document.getElementById('iida').value) 
    let r = document.getElementById('res')

    if (ip > 1 && ip <= 3 ) {
        r.innerText = ('Bebê')
    }else if (ip >= 3 && ip < 12) {
        r.innerText = ('Criança')
    }else if ( ip >= 12 && ip < 17) {
        r.innerText = ('Adolecente')
    }else if (ip >= 18 ) {
        r.innerText = ('Adulto')
    }else {
         alert('[ERRO]')
    }
}