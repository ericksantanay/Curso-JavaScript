function avaliarAluno(n1, n2, n3) {
    let media = (n1 + n2 + n3) / 3;
    let situacao = "";

    if (media >= 7) {
        situacao = "Aprovado";
    } else if (media >= 5) {
        situacao = "Recuperação";
    } else {
        situacao = "Reprovado";
    }

    // RETORNA o resultado (sem console, sem print)
    return {
        media: media,
        situacao: situacao
    };
}

console.log(avaliarAluno(5, 9, 7));
