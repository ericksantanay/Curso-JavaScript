
//Puxando o input, o paragrafo que vai sair a resposta e colocando o new Date() e getFulYeaer()
    let r = document.getElementById('respostaIdade')
    let res = document.getElementById('res')
   
    
    function Calcular() {
    let idade = document.getElementById('itext').value
    let data = new Date()
    let anoAtual = data.getFullYear()
    let conta = anoAtual - idade

    let maxCaracter = 4

    if (idade == '') {
        alert('Preencha o campo com a sua data de nascimento.')
    }else if (idade >  maxCaracter) {
        alert('Coloque Números validos')
        idade.value = ''
    }



    if (conta < 18) {
        res.innerText = (`Voce é menor de idade!!`)
    }else {
        res.innerText = ('Voce é maior de idade')
    } 


      r.innerText = (conta) 
    }