let n1 = 5
let n2 = 9
let n3 = 7

let media = (n1 + n2 + n3) / 3



if (media >= 7 ) {
        console.log(`Nota: ${media}, Situação: aprovado`)
        return
    }else if (media >= 5 && media < 7) {
        console.log(`Nota: ${media}, Situação: Recuperação`)
        return
    }else if (media < 5) {
        console.log(`Nota${media}, Situação: Reprovado`)
        return
    }