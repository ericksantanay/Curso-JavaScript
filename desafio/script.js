function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.getElementById('result')


    if (fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] Nao foi possivel verificar os dados tente novamente')
    }else{
        
    }
    }