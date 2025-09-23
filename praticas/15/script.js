function analisar(){
    var ip = Number(document.getElementById('inum').value)
    var r = document.getElementById('res')

    if (ip % 2 == 0 ){
        r.innerText = ('Esse Número é Par ')
    }else{
        r.innerText = ('Esse Número é Impar')
    }
}