function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = document.getElementById('result')
    if (fano <= 16 && fano >= 65){
        res.innerText = ('Voce é menor de idade, voce nao vota!!')
    }else{
        if (fano >= 18){
            res.innerText = ('Seu voto é obrigatatorio')
        }
    }
}