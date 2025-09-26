
    // Função.
function TemperaturaQuenteFrio() {
    // Variaveis.
    var ip = Number(document.getElementById('itemp').value)
    var r = document.getElementById('res')
   
    // if, else-if e else.

        if (ip >= -89 && ip < 20) {
            r.innerText = ('Frio!')
        }else if (ip >= 20 && ip < 30) {
            r.innerText = ('Agradavel')
        }else if (ip >= 30) {
            r.innerText = ('Quente')
        }else{
            alert('[ERRO] TENTE NOVAMENTE.')
        }
}