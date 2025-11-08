    // Puxando o input 
    let ip = document.getElementById('isenha')
    let icone = document.getElementById('icon')
   
    // Função 
    function MostrarSenha() {

        // Mostrando a Senha 
        if (ip.type == 'password') {
            ip.type = 'text'
            icone.innerText = 'visibility_off'
            ip.focus()
        }else {
            ip.type = 'password'
            icone.innerText = 'visibility'
        }
           
        
    }