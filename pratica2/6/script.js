    let indice = [0] 


    function texto() {

    const r = document.getElementById('res')

    let textos = ["Ola Boniteza", "Ola Lindo(a)", "Celular", "Pão", "Pão de queijo", "Mortadela", "Truco", "Uno", "Fusca", "Gol", "Celular", "Mouse", "Teclado"]
    
    indice++
    r.innerText = (textos[indice])
    

    if (indice >= textos.length) {
        indice = 0
    }
}