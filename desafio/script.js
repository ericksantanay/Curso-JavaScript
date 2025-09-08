function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = document.getElementById('result')
    if (fano < 16){
        res.innerText = ('Voce é menor de idade, voce nao vota!!')
    }else{
        if (fano >= 18){
            res.innerText = ('Seu voto é obrigata')
        }else{
            if (fano >= 16 && fano >= 65){
                res.innerText = ('Seu voto é opicional')
            }else{
                window.alert('[ERRO] Nao foi possivel verificar os dados tente novamente')
            }
        }
    }
}