var idade = 1

if (idade >= 0 && idade < 16){
    console.log(`Voce tem ${idade} anos, e nao pode votar!!!!`)
}else{
    if (idade > 16 || idade < 18 ){
         console.log(`Voce tem ${idade} anos, e seu voto é opicional!!!!`)
    }else {
        if (idade >= 18){
             console.log(`Voce tem ${idade} anos, e seu voto é obrogatorio!!!!`)
        }else {
            
        }
    }
}