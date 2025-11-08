
//Puxando o input, o paragrafo que vai sair a resposta e colocando o new Date() e getFulYeaer()
    let r = document.getElementById('respostaIdade')
    let res = document.getElementById('res')
   
    // Função Calcular
    function Calcular() {
    let idade = document.getElementById('itext').value
    let data = new Date()
    let anoAtual = data.getFullYear()
    let conta = anoAtual - idade

    // Max de caracterias que o usuario pode digitar
    let maxCaracter = 4

    // Se o input == a (nada) vai aparecer para o usuario preencher
    if (idade == '') {
        alert('Preencha o campo com a sua data de nascimento.')
    }else if (idade >  maxCaracter) {
        idade.value = ''
        alert('Coloque Números validos')
    }

    
    if (conta < 18) {
        res.innerText = (`Voce é menor de idade!!`)
    }else {
        res.innerText = ('Voce é maior de idade')
    } 


      r.innerText = (conta) 
    }