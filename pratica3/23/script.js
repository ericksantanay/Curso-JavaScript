    // Array
    let armazemTarefas = []

    // Indice 
    indice = 0 

    
    // Chamando o resul, aonde vai sair o codigo!
    let r = document.getElementById('resul')
    
    // Botao
    let botao = document.getElementById('btn')
  
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

    // Objeto Cria um pequeno “pacotinho de dados” (um objeto).
    let objto = {
        tarefa: ipTarefa
    }

    // Push Coloca o objeto dentro da lista de tarefas
    armazemTarefas.push(objto)

    // Faz um laço e exibe todas as tarefas que estão no array, com um botão de apagar para cada uma.
    armazemTarefas.forEach ((item, indice) => {
        r.innerHTML += (`<div style='border: 1px solid black;'><span>${item.tarefa}</span> <button id='btn' onclick="apagar(${indice})"> <span class="material-symbols-outlined">delete</span></button> </div>`)             // Aqui tem a função de apagar a tarefa
                      
    });
        // Limpar o campo depois de digitado
        document.getElementById('itarefa').value = ''

    }


    //-------------------------------------------------------------------------
      // Função De apagar o indice
    function apagar(indice) {
        r.innerHTML = '' // È preciso desse campo
        armazemTarefas.splice(indice,1)

        // Laço de repetição com o item e o indice, eu pego esse indice para eu apagar ele depois quando receber a função
    armazemTarefas.forEach ((item, indice) => {
        r.innerHTML += (`<div><span>${item.tarefa}</span> <button id='btn' onclick="apagar(${indice})"> <span class="material-symbols-outlined">delete</span></button> </div>`)
         
    });

    }

   
