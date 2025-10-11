    function verificar() {
    const ip = Number(document.getElementById('inum').value)
    const r = document.getElementById('res')
    const senha = 1


    if (ip == senha){
        r.innerText = ('Acertou!')
    }else {
        r.innerText = ('Errou!')
    }
}