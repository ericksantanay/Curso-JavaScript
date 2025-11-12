    // Chamando o resul, aonde vai sair o codigo!
    let r = document.getElementById('resul')
    let deletar = document.querySelector('.deletar')
  
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

    // Laço de repetição !!!
    armazemTarefas.forEach(item =>  {
        r.innerHTML += (`<div><span>${item.tarefa}</span> <button onclick="apagar()"><span class="material-symbols-outlined">delete</span></button></div>`)
         
    });


    }

      
    // Array
    let armazemTarefas = []

    // Indice 
    indice = 0 


    function apagar() {
       indice = removeEventListener(indice)

    }

   
