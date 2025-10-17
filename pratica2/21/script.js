    let perguntas = document.getElementById('perguntas')
    indice = 0
    function verificarResposta1() {
    let pergunta = [
    {
    pergunta: "Qual linguagem é usada para estilizar páginas da web?",
    opcoes: ["HTML", "CSS", "JavaScript"],
    correta: 1 // índice da resposta certa (CSS)
  },
    ]
    indice++
    perguntas.innerText = (pergunta[indice])
    
}