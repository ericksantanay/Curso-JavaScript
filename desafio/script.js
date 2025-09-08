function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano').value 
    var res = document.getElementById('result')

    if (fano >= 1 && fano < 16){
         document.body.style.background = '#E60901'
        res.innerText = (`Voce tem ${fano} anos e é menor de idade, voce nao vota!!!!!`)
    }else{
        if (fano >= 18 && fano < 64){
             document.body.style.background = '#008450'
            res.innerText = (`Voce tem ${fano} anos e é maior de idade, seu voto é obrigatorio!!!!!`)
        }else{
            if (fano >= 16 || Number(fano) < 18 && Number(fano) >=65){
                document.body.style.background = '#FFD400'
                res.innerText = (`Voce tem ${fano} anos seu voto é opicional`)
            }else{
                 window.alert('[ERRO] Nao foi possivel verificar os dados tente novamente')
            }
        }
    }
}