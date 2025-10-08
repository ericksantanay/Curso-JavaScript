function adicionar() {
    const ip = document.getElementById('itxt').value
    let marcar = ''
    
        let p = document.getElementById('res')
        p.append(`${ip}`)
        marcar++
    

    if (ip == '') {
        alert('ERRO')
    }
}