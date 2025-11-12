    // Array
    let armazemTarefas = []

    // Indice 
    indice = 0 

    
    // Chamando o resul, aonde vai sair o codigo!
    let r = document.getElementById('resul')
  
    // Função de adicionar 
    function Adicionar() {
    // Chamando o input 
    let ipTarefa = document.getElementById('itarefa').value

    // Parte do preencha o campo
    if (ipTarefa === '') {
        alert('Preencha o Campo abaixo!')
    }

    // Parte para não duplicar
    r.innerHTML = ''

    // Objeto 
    let objto = {
        tarefa: ipTarefa
    }

    // Push
    armazemTarefas.push(objto)

    // Laço de repetição com o item e o indice, eu pego esse indice para eu apagar ele depois quando receber a função
    armazemTarefas.forEach ((item, indice) => {
        r.innerHTML += (`<div><span>${item.tarefa}</span> <button onclick="apagar(${indice})"> <span class="material-symbols-outlined">delete</span></button> </div>`)
         
    });
        // Limpar o campo depois de digitado
        document.getElementById('itarefa').value = ''
    }

      // Função De apagar o indice
    function apagar(indice) {
        r.innerHTML = ''
        armazemTarefas.splice(indice,1)
    }

   
