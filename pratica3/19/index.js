    // Trasendo os inputs e aonde vai sair a resposta
    let r = document.getElementById('res')
    // Maximo de Caractereas
    let maxCaracter = 4

    function Verificar() {
    // Puxando o input que pega o nome do usuario
    let inputNome = document.getElementById('inome').value
    // Parte da Idade,  input com o value e fazendo a conta 
    let Idade = document.getElementById('iidade')
    let idadeValue = Idade.value 
    let data = new Date()
    let anoatual = data.getFullYear()
    let resultado = Number(anoatual - idadeValue)

        // Parte da idade condição
        if (inputNome === '') { // Ip nome
            alert('Digite no Campo abaixo')
            return
        }else if (idadeValue === '') { // Ip idade
            alert('Digite no Campo abaixo')
            return
        }else  if (idadeValue > maxCaracter) { // Maximo de caracter
            alert('Digite um valor correto')
            Idade.value = ''
            return
        }


    // Resultado Final
      
    
    r.innerText = (`Seu nome é ${inputNome} e voce tem ${resultado} anos`)

    /*
    if (inputNome && idadeValue === length) {
        r.innerText = (`Seu nome é ${inputNome} e voce tem ${idadeValue} anos`)
        return
    }else if (inputNome == length && idadeValue == '') {
        r.innerText = (`Seu nome é ${inputNome}`)
        return
    }else if (idadeValue == length && inputNome == '') {
        r.innerText = (`Voce tem${resultado} anos`)
        return
    }
    Aqui eu tentei fazer se o usuario digita só o nom aparece só o nome se o usuario digita a idade aparece só  a idade mas nao deu por isso eu comentei.

    E eu tirei o '' do idadeValue mas mesmo assim nao foi 
    */ 

    }

    // Puxando os icones e fazendo a cor do tema

    let temaInicial = 'white'
    let icone = document.getElementById('icones')

    function MudarTema() {
        if (temaInicial == 'white') {
            document.body.style.backgroundColor = 'black'
            document.body.style.color = 'white'
            icone.innerText = ('sunny')
            temaInicial = 'black'
        }else {
            document.body.style.backgroundColor = 'white'
            document.body.style.color = 'black'
            icone.innerText = ('bedtime')
            temaInicial = 'white'
        }
    }
