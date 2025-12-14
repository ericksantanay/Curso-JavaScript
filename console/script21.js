// Escola
let nota = 2
let frequencia = 100

if (nota < 5 ) {
    console.log('Reprovado!')
    return
}else if (nota >= 5 && frequencia < 75 ) {
    console.log('Reprovado por Falta')
}else if (nota >= 5 && frequencia >= 75) {
    console.log('Aprovado')
}