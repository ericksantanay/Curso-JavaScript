// função
function mostrarSenha() {
    // Input Senha 
    let senha = document.getElementById('senha')

    if (senha.type == 'password') {
        senha.type = 'text'
    }else {
        senha.type = 'password'
    }
}