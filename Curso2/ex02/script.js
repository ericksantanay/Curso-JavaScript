var idade = 16

if (idade >= 0 || idade < 16){
    console.log(`Voce tem ${idade} anos, e nao pode votar!!!!`)
}else {
    if (idade < 18 ){
        console.log(`Voce tem ${idade} anos, e o seu voto é opicional!!!!`)
    }else{
        if (idade >= 18 ){
            console.log(`Voce tem ${idade} anos, seu voto é Obrigatorio!!!!`)
        }else {
            if (idade >= 65){
                console.log(`Voce tem ${idade} anos, e seu voto é opicional`)
            }
        }
    }
}