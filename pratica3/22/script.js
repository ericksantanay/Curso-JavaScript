    // Chamndo aonde vai sair o script 
    let r = document.getElementById('resul')

    // Resultado aonde vai sair a media dos alunos 
    let rm = document.getElementById('media')

    // Array 
    let armazem = []

    // Função 
    function Adicionar() {
        // Chamando o input Nome
        let Nome = document.getElementById('inome').value
        // Puchando o input Nota
        let Nota = Number(document.getElementById('inota').value)


        if (Nome === '' || Nota === '') {
            alert('Preencha todos os campos!');
             return
        }
        
        if (Nota > 10) {
            alert('O Maximo permitido é ate 10. Preencha a Nota corretamente')
            Nota = ''
            return
        }

        // Dados
        let dados = {
            nome: Nome,
            nota: Nota
        }

        // Atualizar a Lista 
        let soma = 0
        armazem.push(dados)

        armazem.forEach(item => {
            r.innerText += `<p>👤Aluno:${dados.nome}  🧠Nota: ${dados.nota.toFixed(2)}</p>`
            soma += item.nota

            let media = soma / armazem.length

            rm.innerText = (`A média da turma é: 👤👤👤 ${media}`)
        });
        
        document.getElementById('inome').value = ''
        document.getElementById('inota').value = ''
    }