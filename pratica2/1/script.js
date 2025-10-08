function adicionar() {
    const ip = document.getElementById('itxt').value
   
    function adicionarTexto() {
        let p = document.getElementById('res')
        p.append(`${ip}`)
    }

    if (ip == '') {
        alert('ERRO')
    }
}