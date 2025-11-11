    //Chamndo os inputs
    // Input nome
    let Nome = document.getElementById('inome')
    let NomeValue = Nome.value
    //Chamando o input Idade
    let Idade = document.getElementById('iidade')
    let IdadeValue = Idade.value
    //Chamando o input profissão
    let Profissao = document.getElementById('iprofissao')
    let ProfissaoValue = Profissao.value

    // Criando o Array Objeto!
    let dados = [{
        Nome: "Erick",
        Idade: "18",
        Profissão: "Programador"
    }]

    // Chamando a div aonde vai sair o resultado
    let r = document.getElementById('lista')

   function Cadastrar() {
     r.innerText = (dados.push('-'))
   }