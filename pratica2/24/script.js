let tempo = document.getElementById('tempo')

    // manipulação de data
    let data = new Date()
    let hora = data.getHours()

    // horarios 
    if (hora >= 5 && hora < 12 ) {
        tempo.innerText = ('BOM DIA!!')
    }else if (hora >= 12 || hora < 18) {
        tempo.innerText = ('BOA TARDE!!')
    }else {
        tempo.innerText = ('BOA NOITE')
    }




   

    indice = 0
    function MudarMensaguem() {
     
     let frases = [
    "Mensagem do dia: Sinta o aroma da felicidade.",
    "Mensagem do dia: Cada pão, uma história.",
    "Mensagem do dia: O sabor que transforma o dia.",
    "Mensagem do dia: Comece o dia com alegria.",
    "Mensagem do dia: Delícias feitas com amor.",
    "Mensagem do dia: Tradição que se renova a cada fornada.",
    "Mensagem do dia: Mais que pão, momentos.",
    "Mensagem do dia: O melhor da manhã está aqui.",
    "Mensagem do dia: Sabor que desperta sorrisos.",
    "Mensagem do dia: A felicidade tem cheiro de pão quentinho.",
    "Mensagem do dia: Cada fornada é feita com carinho.",
    "Mensagem do dia: Amor e pão em cada fatia.",
    "Mensagem do dia: O dia começa melhor com pão quentinho.",
    "Mensagem do dia: Sabores que encantam a todos.",
    "Mensagem do dia: Venha experimentar a alegria em forma de pão."
    ]

        let r = document.getElementById('saudacao')
        let nome = document.getElementById('ipnome').value
        r.innerText = (`Ola ${nome}`)
        indice++
    }
    