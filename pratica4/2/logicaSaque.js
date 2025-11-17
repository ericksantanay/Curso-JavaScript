function sacarValor(valor) {
    let notas = [100, 50, 20, 10, 5, 2];
    let resultado = {};

    // Não existe nota de 1 nem de 3, então não pode sacar esses valores
    if (valor === 1 || valor === 3) {
        return "Valor inválido para saque";
    }

    for (let nota of notas) {
        resultado[nota] = Math.floor(valor / nota); // quantas notas cabem
        valor = valor % nota; // resto do valor
    }

    // Se sobrar valor impossível de sacar (ex: sobra 1), não funciona
    if (valor !== 0) {
        return "Valor inválido para saque";
    }

    return resultado;
}

console.log(sacarValor(350));
