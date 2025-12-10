let h = document.getElementById('horas')
let m = document.getElementById('minutos') 
let s = document.getElementById('segundos')
let mi = document.getElementById('milessegundo')


let hor = 0
let min = 0 
let seg = 0
let mil = 0

let tempo;

function iniciar() {

    if (tempo) return; // Para o cronometro nao repetir


    tempo = setInterval(function(){
    // Milessegundo
        mil++    
        mi.innerText = String(mil).padStart(2, '0')


        // Der 10 mile vai dar 1 segundo
        if (mil == 10) {
            mil = 0
            seg++
            s.innerText = String(seg).padStart(2, '0')
            }

            // Quando der 60 segundos da 1min
            if (seg == 60) {
                seg = 0
                min++
                m.innerText = String(min).padStart(2, '0')
            }

            // Quando der 60 min vai dar 1 hora
            if (min == 60 ) {
                min = 0
                hor++
                h.innerText = String(hor).padStart(2, '0')
            }
    

    }, 100)

}

function pausar() {
    clearInterval(tempo)
    tempo = null
}

function resetar() {

    hor = 0
    min = 0 
    seg = 0
    mil = 0

    h.innerText = "00";
    m.innerText = "00";
    s.innerText = "00";
    mi.innerText = "00";

    pausar()
}
 
