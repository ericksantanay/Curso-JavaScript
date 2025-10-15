    indice = 0
    function  MudarMensagem() {
        const mensagem = document.getElementById('men')
        const palavras = ["Continue Praticando, voce está evoluindo!", "Voce é capaz", "Voce consegue!", "Eu confio em voce"]
        mensagem.innerText = (palavras[indice])
        indice++

        if (indice == 4) {
            indice = 0
        }   

        let d = document.getElementById('dia')
        let sem = document.getElementById('semana')
        let diadasemana = document.getElementById('diaDasemana')
        let me = document.getElementById('mes')
        let an = document.getElementById('ano')
        let nomeDaSemana = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sabado"]
        let diaDaSemanaEscrito = nomeDaSemana[data.getDay()]
        const dia = new Date
        let semana = dia.getDay()

}

    setInterval (function() {
        
        const h = document.getElementById('hora')
        const m = document.getElementById('min')
        const s = document.getElementById('seg')
        let data = new Date()
        
        const hora = data.getHours()
        const min = data.getMinutes()
        const sec = data.getSeconds()
        h.innerText = (hora)
        m.innerText = (min)
        s.innerText = (sec)
        }, 1000)