    // Chamando o resul, aonde vai sair o codigo!
    let r = document.getElementById('resul')
  
    // Função de adicionar 
    function Adicionar() {
    // Chamando o input 
    let ipTarefa = document.getElementById('itarefa').value


    // Objeto 
    let objto = {
        tarefa: ipTarefa
    }

    // Push
    armazemTarefas.push(objto)

    // Laço de repetição !!!
    armazemTarefas.forEach(item => {
        
    });
    }

      
    // Array
    let armazemTarefas = []

    // Indice 
    indice = 0 
