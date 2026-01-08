//######## MANIPILA O DOM #########
let resultado1 = document.getElementById('resultado1')
let resultado2 = document.getElementById('resultado2')
let resultado3 = document.getElementById('resultado3')
let resultado4 = document.getElementById('resultado4')
let paragrafoStatus = document.querySelector('.status')
//####### RESULTADO DAS TAREFAS #########
let resultTarefas = document.querySelector('.resultadoListaTarefas')


//###### BACKGROUND DO PARAGRAFO ########
let resultadoPrioridadeBackground = document.querySelector('.resultadoPrioridade')

//####### ARRAY PARA ARMAZENAR OS ITENS #########
let guardarDados = []


//####### INDICE PARA PERCORRER #########
indice = 0 

//####### ESTADO INICIAL DAS TAREFAS #########
let totalTarefas = 0
let tarefasPendentes = 0
let EmAndamento = 0
let concluido = 0

let indiceEmEdicao = null



//####### FUNÇÃO DE ADICIONAR #########
function AdicionarTarefa() {
    // INPUT DA TAREFA
    let tarefa = document.getElementById('itarefa').value

    // PEGANDO O VALUE DO SELECT
    let prioridade = document.querySelector('.opcoesPrioridade').value 

    // PEGANDO O STATUS
    let statusTarefa = document.getElementById('estadoDoStatus').value

    
    // Ajustar a parte de nao estar nada digitado no input 

    // VERIFICAR SE O INPUT TA VAZIO
    if (tarefa === '') {
        alert('Preencha o Campo')
        return
    }

    // OBJETO
    let dados = {
        tarefa: tarefa,
        prioridade: prioridade,
        statusTarefa: statusTarefa
    }

    // COLOCANDO OS DADOS NO ARRAY
    guardarDados.push(dados)


    // CONDIÇÃO DA COR DA PRIORIDADE
    //if (prioridade === 'Alta') {
    //    resultadoPrioridadeBackground = '#prioridade-alta'
   // }else if (){

    //}




    //ZERAR O INPUT DEPOIS DE DIGITADO
    document.getElementById('itarefa').value = ''

    atulizadoALista()
}



// FUNÇÃO PARA NÃO REPETIR CODIGOS
function atulizadoALista() {
    //NÃO REPETIR OS DADOS
    resultTarefas.innerHTML = ''

    // ZERANDO OS VALORES ANTES DE ENTRAR 
    totalTarefas = 0
    tarefasPendentes = 0
    EmAndamento = 0
    concluido = 0


    guardarDados.forEach((item, indice) => {

        resultTarefas.innerHTML += `

            <div class="cards">
                <div class="left">
                            <div class="textNameEPrioridade">
                                <p class="nomeTarefa">${item.tarefa}</p>
                                <p class="resultadoPrioridade">${item.prioridade} prioridade</p>
                            </div>
                            <p class="status">Status: ${item.statusTarefa}</p>
                        </div>

                        <div class="right">
                            <div class="btns">
                                <button class="editar" onclick="Editar(${indice})">Editar</button> 
                                <button class="excluir" onclick="Excluir(${indice})">Excluir</button>
                            </div>
                        </div>

            </div>
                        
        `




        //CONDIÇÃO DE DO TOTAL DE TAREFAS 
        if(item.tarefa) {
        totalTarefas++
        }   


        // CONDIÇÃO DE TAREFAS CONCLUIDO
        if (item.statusTarefa == 'Concluido') {
        concluido++
        }

        // EM ANDAMENTO
        if(item.statusTarefa == 'Andamento') {
            EmAndamento++
        }

        // CONDIÇÃO DE TAREFAS PENDENTES
        if(item.statusTarefa == 'Pendente') {
            tarefasPendentes++
        }        



    });

    //TOTAL DE TAREFAS
    resultado1.innerText = totalTarefas

    // TAREFAS PENDENTES 
    resultado2.innerText = tarefasPendentes

    // Resultado EM ANDAMENRTO
    resultado3.innerText = EmAndamento
    
    // TOTAL DE TAREFAS CONCLUIDAS
    resultado4.innerText = concluido

}



// EU PRECISO PEGAR O .resultadoPrioridade PARA FAZER A CONDIÇÃO E MUDAR A COR A CADA CONDIÇÃO SENDO VERMELHO, AMARELO E VERDE

// FUNÇÃO EXCLUIR OS CARDS 
function Excluir(indice) {
    guardarDados.splice(indice, 1)
    atulizadoALista()
}


// FUNÇÃO EDITAR 
function Editar(indice) {

    //QUANDO O USUARIO CLICA EM EDITAR APARECE O SELECT PARA ELE ESCOLHER O STATUS

    estadoDoStatus.style.display = 'block'

     indiceEmEdicao = indice
}


// Mudando o status
function mudarStatus() {
    let novoStatus = estadoDoStatus.value

    if (indiceEmEdicao === null) return

    guardarDados[indiceEmEdicao].statusTarefa = novoStatus

    estadoDoStatus.style.display = 'none'
    indiceEmEdicao = null

    atulizadoALista()
}
