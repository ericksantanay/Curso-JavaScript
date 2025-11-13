    // 🧱 Aqui é onde a gente guarda todas as tarefas.
// Pense nisso como uma caixinha que vai acumulando várias anotações.
let armazemTarefas = []


// 🔢 Índice (posição de cada tarefa na lista)
// Exemplo: a 1ª tarefa é índice 0, a 2ª é índice 1, e assim por diante.
indice = 0 


// 📄 Aqui pegamos a parte do HTML onde as tarefas vão aparecer na tela.
let r = document.getElementById('resul')


// 🔘 Aqui pegamos o botão “Adicionar” (só pra ter guardado em uma variável).
let botao = document.getElementById('btn')


// ✍️ Função que adiciona uma nova tarefa
function Adicionar() {

  // 📥 Aqui pegamos o texto que o usuário digitou no campo de tarefa.
  let ipTarefa = document.getElementById('itarefa').value

  // ⚠️ Se o campo estiver vazio, mostramos um aviso.
  if (ipTarefa === '') {
      alert('Preencha o Campo abaixo!')
  }

  // 🧹 Limpamos a tela pra mostrar a lista atualizada depois.
  r.innerHTML = ''

  // 📦 Criamos um "pacotinho" (objeto) com o texto da tarefa.
  // Isso ajuda a organizar os dados direitinho.
  let objto = {
      tarefa: ipTarefa
  }

  // ➕ Agora colocamos o pacotinho dentro da caixa (array).
  armazemTarefas.push(objto)

  // 🔁 Aqui é o laço (forEach).
  // Ele vai repetir pra cada tarefa dentro do array e mostrar na tela.
  armazemTarefas.forEach((item, indice) => {
      r.innerHTML += (`
          <div style='border: 1px solid black; padding: 5px; margin: 3px;'>
              <span>${item.tarefa}</span> 
              <button id='btn' onclick="apagar(${indice})"> 
                  <span class="material-symbols-outlined">delete</span>
              </button>
          </div>
      `)
  });

  // 🧽 Depois que a tarefa é adicionada, limpamos o campo pra digitar outra.
  document.getElementById('itarefa').value = ''
}



// --------------------------------------------------------------------


// 🗑️ Função que apaga uma tarefa
function apagar(indice) {

  // 🧹 Primeiro limpamos a tela (pra redesenhar depois sem o item apagado).
  r.innerHTML = ''

  // ❌ Tiramos do array a tarefa que o botão mandou apagar.
  // O número (indice) mostra qual tarefa vai ser apagada.
  armazemTarefas.splice(indice, 1)

  // 🔁 Depois de apagar, repetimos o forEach pra mostrar o que sobrou.
  armazemTarefas.forEach((item, indice) => {
      r.innerHTML += (`
          <div style='border: 1px solid black; padding: 5px; margin: 3px;'>
              <span>${item.tarefa}</span> 
              <button id='btn' onclick="apagar(${indice})"> 
                  <span class="material-symbols-outlined">delete</span>
              </button>
          </div>
      `)
  })
}

   
   

    

   /*  // Array
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

    // Push Coloca o objeto dentro da lista de tarefas (Array) 
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
    ESSE FOI O QUE EU FIZ
   */
