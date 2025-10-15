    indice = 0
    function  MudarMensagem() {

        // Esse é da mensaguem que troca a cada click 
        const mensagem = document.getElementById('men')
        const palavras = ["Continue Praticando, voce está evoluindo!", "Voce é capaz", "Voce consegue!", "Eu confio em voce"]
        mensagem.innerText = (palavras[indice])
        indice++

        if (indice == 4) {
            indice = 0
        }   

        //Variaveis 
        let sem = document.getElementById('semana')
        let diadasemana = document.getElementById('diaDasemana')
        let me = document.getElementById('mes')
        let an = document.getElementById('ano')
        const dia = new Date()

        // Nome da semana Ex: Segunda terça quarta etc..
        let nomeDaSemana = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sabado"]
        let diaDaSemanaEscrito = nomeDaSemana[dia.getDay()]
        sem.innerText = (diaDaSemanaEscrito)

        // Dia da semana de 1 a 31
        let semana = dia.getDate()
        diadasemana.innerText = (semana)


        // Mes 
        let mes = dia.getMonth()
        let nomeDoMes = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Jungo", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]
        let nomeDoMesEscrito = nomeDoMes[dia.getMonth()]
        me.innerText = (nomeDoMesEscrito)

        // Ano atual
        let ano = dia.getFullYear()
        an.innerText = (ano)

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