    let corInicial = 'white'
    
    function trocarCor() {
    

    if (corInicial == 'white') {
        document.body.style.backgroundColor = 'black'
        corInicial = 'black'
         document.body.style.color = 'white'
    }else {
        document.body.style.backgroundColor = 'white'
        corInicial = 'white'
    }
}