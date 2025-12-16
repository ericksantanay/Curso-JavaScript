//Média de três notas 
const nota1 = 10
const nota2 = 9
const nota3 = 9

let media = (nota1 + nota2 + nota3)  / 3
 
if (media >= 7 ) {
    console.log(`Sua nota é ${media.toFixed(2)}`)
    console.log('Passou!')
}else if (media >= 5 && media < 7) {
    console.log(`Sua nota  é ${media.toFixed(2)}`)
    console.log('Recuperação!')
}else {
    console.log(`Sua nota  é ${media.toFixed(2)}`)
    console.log('Reprovado!')
}
