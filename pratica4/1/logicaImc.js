function calcularIMC(peso,altura) {
    let imc = peso / (altura * altura)
    let situacao = ''

    if (imc < 18.5) {
        situacao = 'Abaixo do peso'
    }else if (imc >= 18.5 && imc < 24.9) {
        situacao = 'Peso normal'
    }else if (imc >= 25 && imc < 29.9) {
        situacao = 'Sobrepeso'
    }else {
        situacao = 'Obesidade'
    }


    return {
        imc: imc,
        situacao: situacao
    }
}

console.log(calcularIMC(80, 1.80))