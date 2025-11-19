//Puxando o menu hamburguer para adicionar um X
let m = document.getElementById('hamburguer')
// Parte do Menu
function ClickMenu() {
    if (menu.style.display == 'block') {
        menu.style.display = 'none'
        m.innerText = 'menu'
    }else {
        menu.style.display = 'block'
        m.innerText = 'close'
    }
}

