
    let icon = document.getElementById('burguer')

    function Click() {
        
    if (menu.style.display == 'block') {
        menu.style.display = 'none'
        icon.innerText = ('menu')
    }else {
        menu.style.display = 'block'
        icon.innerText = ('close')
    }
    }