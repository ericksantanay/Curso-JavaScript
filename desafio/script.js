function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = document.getElementById('result')
    if (ano <= 16 && ano >= 65){
        res.innerText = ('')
    }
}