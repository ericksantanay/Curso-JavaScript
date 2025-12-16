//Verificar se uma pessoa pode votar
let idade = 65

if (idade < 16) {
    console.log('Não Pode votar!')
}else if (idade >= 16 && idade < 18 ) {
    console.log('Voto Opcional!')
}else if (idade >= 18 && idade < 65 ) {
    console.log('Voto Obrigatorio!')
}else {
    console.log('Voto Opicional')
}