function TemperaturaQuenteFrio() {
    var ip = Number(document.getElementById('itemp').value)
    var r = document.getElementById('res')
   
    // if, else-if e else

        if (ip < 20) {
            r.innerText = ('Frio!')
        }
}