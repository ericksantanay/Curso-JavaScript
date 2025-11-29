// Primeiro eu vou chamar a o icone 
let icone = document.getElementById('icone')

// Função 
function mostrarsenha() {
    // Input senha
    let senha = document.getElementById('senha')

    if (senha.type == 'password') {
        senha.type = 'text'
         icone.innerText = 'visibility_off'
    }else {
        senha.type = 'password'
        icone.innerText = 'visibility '
    }
}