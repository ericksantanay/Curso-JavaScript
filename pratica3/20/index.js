// Criando o array vazio (vai guardar os cadastros)
let dados = []

// Chamando o local onde vai mostrar a lista
let r = document.getElementById('lista')

function Cadastrar() {
  // Pegar os valores dos inputs dentro da função
  let NomeValue = document.getElementById('inome').value
  let IdadeValue = document.getElementById('iidade').value
  let ProfissaoValue = document.getElementById('iprofissao').value

  // Verificar se está tudo preenchido
  if (NomeValue === '' || IdadeValue === '' || ProfissaoValue === '') {
    alert('Preencha todos os campos')
    return
  }

  // Criar o objeto com os dados do usuário
  let pessoa = {
    nome: NomeValue,
    idade: IdadeValue,
    profissao: ProfissaoValue
  }

  // Adicionar o objeto no array
  dados.push(pessoa)

  // Mostrar os resultados na tela
  r.innerHTML = '' // limpa antes de mostrar
  dados.forEach((item) => {
    r.innerHTML += `<p>👤 ${item.nome} — ${item.idade} anos — ${item.profissao}</p>`
  })

  // Limpar os inputs
  document.getElementById('inome').value = ''
  document.getElementById('iidade').value = ''
  document.getElementById('iprofissao').value = ''
}
