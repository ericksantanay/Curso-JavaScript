function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano').value 
    var res = document.getElementById('result')
    if (fano >= 0 && fano < 16){
        res.innerText = (`Voce tem ${fano} anos e é menor de idade, voce nao vota!!!!!`)
    }else{
        if (fano >= 18 && fano < 64){
            res.innerText = (`Voce tem ${fano} anos e seu voto é obrigatorio!!!!!`)
        }else{
            if (fano >= 16 || Number(fano) < 18 && Number(fano) >=65){
                res.innerText = (`Voce tem ${fano} anos seu voto é opicional`)
            }else{
                 window.alert('[ERRO] Nao foi possivel verificar os dados tente novamente')
            }
        }
    }
}