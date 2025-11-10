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
        }else  if (idadeValue.length > maxCaracter) { // Maximo de caracter
            alert('Digite um valor correto')
            Idade.value = ''
            return
        }

    // Resultado Final
    r.innerText = (`Seu nome é ${inputNome} e voce tem ${resultado} anos`)


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


    /*if (inputNome !== '' && idadeValue === '') {
        r.innerText = `Seu nome é ${inputNome}`
    } else if (idadeValue !== '' && inputNome === '') {
        r.innerText = `Você tem ${resultado} anos`
    } else if (inputNome !== '' && idadeValue !== '') {
        r.innerText = `Seu nome é ${inputNome} e você tem ${resultado} anos`
    }
    
    
    */
