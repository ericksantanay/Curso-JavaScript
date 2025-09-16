var idade = 16
if (idade <= 16){
    console.log(`Voce tem ${idade} anos, e voce é menor de idade, voce nao vota!!`)
}else {
    if (idade >= 16 && idade < 18 ){
        console.log(`Voce tem ${idade} anos, seu voto é opicional!!`)
    }else {
        if (idade >= 18 ){
            console.log(`Voce tem ${idade} anos seu voto é obrigatorio!!`)
        }else{
            if(idade >= 65 || idade < 110){
                console.log(`Voce tem ${idade} anos, seu voto é opicional!!`)
            }else{
                alert('[ERRO]')  
            }
        }
    }
}