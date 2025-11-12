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
        armazem.push(dados)

        // Atualizar a Lista 
        r.innerHTML = '';
        let soma = 0;
        
        
        armazem.forEach(item => {
            r.innerHTML += `<p>👤Aluno:${item.nome}  🧠Nota: ${item.nota.toFixed(1)}</p>`;
            soma += item.nota; 
        });

        let media = soma / armazem.length;
        rm.innerText = (`A média da turma é: 👤👤👤 ${media.toFixed(1)}`)
        
        document.getElementById('inome').value = ''
        document.getElementById('inota').value = ''
    }