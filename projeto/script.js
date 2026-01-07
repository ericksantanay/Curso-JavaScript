//######## MANIPILA O DOM #########
let resultado1 = document.getElementById('resultado1')
let resultado2 = document.getElementById('resultado2')
let resultado3 = document.getElementById('resultado3')
let resultado4 = document.getElementById('resultado4')

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



//####### FUNÇÃO DE ADICIONAR #########
function AdicionarTarefa() {
    // INPUT DA TAREFA
    let tarefa = document.getElementById('itarefa').value

    // PEGANDO O VALUE DO SELECT
    let prioridade = document.querySelector('.opcoesPrioridade').value 

    

    // VERIFICAR SE O INPUT TA VAZIO
    if (tarefa === '') {
        alert('Preencha o Campo')
    }

    // OBJETO
    let dados = {
        tarefa: tarefa,
        prioridade: prioridade 
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


    complementos()
}



// FUNÇÃO PARA NÃO REPETIR CODIGOS
function complementos() {
    //NÃO REPETIR OS DADOS
    resultTarefas.innerHTML = ''

    guardarDados.forEach((item, indice) => {

        resultTarefas.innerHTML += `

            <div class="cards">
                <div class="left">
                            <div class="textNameEPrioridade">
                                <p class="nomeTarefa">${item.tarefa}</p>
                                <p class="resultadoPrioridade">${item.prioridade} prioridade</p>
                            </div>
                            <p class="status">Status:Pendente</p>
                        </div>

                        <div class="right">
                            <div class="btns">
                                <button class="editar" onclick="Editar()">Editar</button>
                                <button class="excluir" onclick="Excluir()">Excluir</button>
                            </div>
                        </div>

            </div>

            


                        
        `
    });
}

// EU PRECISO PEGAR O .resultadoPrioridade PARA FAZER A CONDIÇÃO E MUDAR A COR A CADA CONDIÇÃO SENDO VERMELHO, AMARELO E VERDE