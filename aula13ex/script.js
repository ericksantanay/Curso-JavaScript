function carregar(){
    var m = window.document.getElementById('msg')
    var f = window;document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    m.innerText = (`A sua hora atual é ${hora} horas`)
    if (hora >=0 && hora < 12){
        
        m.innerText = ('Bom dia!!!')
    }else {
        if (hora >= 12 && hora < 18){
           
            m.innerText = ('Boa tarde!!')
        }
            
    }
}