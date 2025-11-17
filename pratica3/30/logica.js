let media = 8

function situacao() {
    if (media >= 7 ) {
        console.log('aprovado')
        return
    }else if (media >= 5 || media < 7) {
        console.log('Recuperação')
    }else if (media < 5){
        console.log('Reprovado')
    }
}