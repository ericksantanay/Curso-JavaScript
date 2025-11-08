

    let r = document.getElementById('respostaIdade')
    let res = document.getElementById('res')
   
    // Função Calcular
    function Calcular() {
    //Puxando o input, o paragrafo que vai sair a resposta e colocando o new Date() e getFulYeaer()
    let CampoIdade = document.getElementById('itext')
    let idade = CampoIdade.value
    // Aqui esta a manipulação das datas 
    let data = new Date()
    let anoAtual = data.getFullYear()
    let conta = anoAtual - idade

    // Max de caracterias que o usuario pode digitar
    let maxCaracter = 4

    // Se o input == a (nada) vai aparecer para o usuario preencher
    if (idade == '') {
        alert('Preencha o campo com a sua data de nascimento.')
    }
    
    // Se o usuario digitar mais que 4 caracterias o campo zera.
    if (idade.length  >  maxCaracter) {
        alert('Coloque Números validos')
        CampoIdade.value = ''

    }

    // Ver se o usuario é maior ou menor de idade 
    if (conta < 18) {
        res.innerText = (`Voce é menor de idade!!`)
    }else {
        res.innerText = ('Voce é maior de idade')
    } 

    // Aqui vai sair a idade do usuario.
    r.innerText = (conta) 
    }