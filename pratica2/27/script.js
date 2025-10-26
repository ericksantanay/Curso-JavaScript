    const temp = document.getElementById('temperatura')
    const forn = document.getElementById('forno')

    indice = 0
    function aumentarTemp() {
        indice++
        temp.innerText = (`A TEMPERATURA É ${indice} GRAUS`)
        
        if (indice < 100) {
        forn.innerText = ('O FORNO ESTA FRIO!')
        document.body.style.backgroundColor = 'blue'
        document.body.style.color = 'white'
    }else if (indice >= 100 && indice < 200) {
        forn.innerText = ('TEMPERATURA IDEAL!')
        document.body.style.backgroundColor = 'yellow'
        document.body.style.color = 'black'
    }else if (indice > 200){
        forn.innerText = ('CUIDADO! ESTÁ MUITO QUENTE!')
        document.body.style.backgroundColor = 'red'
        document.body.style.color = 'white'
    } 
}


    function diminuirTemp() {
        indice--
        temp.innerText = (`A TEMPERATURA É ${indice} GRAUS`)
        
        if (indice < 100) {
        forn.innerText = ('O FORNO ESTA FRIO!')
        document.body.style.backgroundColor = 'blue'
        document.body.style.color = 'white'
    }else if (indice >= 100 && indice < 200) {
        forn.innerText = ('TEMPERATURA IDEAL!')
        document.body.style.backgroundColor = 'yellow'
        document.body.style.color = 'black'
    }else if (indice > 200){
        forn.innerText = ('CUIDADO! ESTÁ MUITO QUENTE!')
        document.body.style.backgroundColor = 'red'
        document.body.style.color = 'white'
    } 
    }

   
