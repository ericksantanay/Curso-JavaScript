function Texto() {
    const ip = document.getElementById('inome').value
    const r = document.getElementById('res')

    r.innerText = (`Olá, ${ip}`)
    
    if (ip == '') {
        alert('Escreva no campo abaixo.')
        r.innerText = ''
    }
}