function carregar(){
    var m = window.document.getElementById('msg')
    var f = window;document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    m.innerText = (`A sua hora atual é ${hora} horas`)
    if (hora >=0 && hora < 12){
        document.body.style.background = '#9d0404a1'
        m.innerText = (`A sua hora atual é ${hora}horas Bom dia!!`)
    }else {
        if (hora >= 12 && hora < 18){
            document.body.style.background = '#b777119d'
           f.src = 'lego-foto.jpg'
            m.innerText = (`A sua hora atual é ${hora} horas, Boa tarde!!`)
        }else{ 
                m.innerText = (`A sua hora atual é ${hora}`)
        }
            
    }
}