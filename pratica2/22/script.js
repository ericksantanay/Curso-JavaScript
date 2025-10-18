    indice = 0
    setInterval(function(){
    const r = document.getElementById('res')

    let nomes = [
        "Ana", "Bruno", "Carlos", "Daniela", "Eduardo", "Fernanda",
        "Gabriel", "Helena", "Igor", "Joana", "Kleber", "Larissa",
        "Marcelo", "Nathalia", "Otávio", "Patrícia", "Ricardo", "Sabrina",
        "Thiago", "Vanessa", "William", "Yasmin", "Lucas", "Mariana",
        "Diego", "Juliana", "Felipe", "Camila", "Rafael", "Beatriz"
    ]

    indice++

    r.innerText = (nomes[indice])
    if (indice == 30) {
        indice = 0
    }


}, 1000)