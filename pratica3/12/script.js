

    let icon = document.getElementById('iconTema')
    let corInicial = 'white'

    function MudarTema() {

    if (corInicial == 'white') {
        document.body.style.backgroundColor = 'black'
        corInicial = 'black'
        document.body.style.color = 'white'
        icon.innerText = ('light_mode')
    }else {
        document.body.style.backgroundColor = 'white'
        corInicial = 'white'
        document.body.style.color = 'black'
        icon.innerText = ('dark_mode') 
    }
}
