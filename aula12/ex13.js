var idade = 69
if (idade < 16) {
    console.log('Nao vota')
}else{
    if (idade < 18 || idade > 65) {
        console.log('voto opicional')
    }else{
        if (idade >= 18){
            console.log('Voto Obrigatorio')
        }
    }
}