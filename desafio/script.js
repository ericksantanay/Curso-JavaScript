function verificar(){
    var inp1 = window.document.getElementById('itxt1')
    var inp2 = window.document.getElementById('istxt2')
    var inp3 = window.document.getElementById('istxt3')
    var res = window.document.getElementById('result')
    res.innerText = (`Detectamos ${res}`)
    if (inp1 - 2025){
        res.innerText = (`Voce tem ${res}`)
    }
}