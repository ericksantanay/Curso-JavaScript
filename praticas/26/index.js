function verif() {
    let ip = document.getElementById('iturno').value 
    let r = document.getElementById('res')

    const dia1 = 'D'
    const tarde = 'T';
    const noite = 'N';

    if (ip == dia) {
        r.innerText = (`Turno da manhã`)
    }else if (ip == tarde) {
        r.innerText = (`Turno da Tarde`)
    }else if ( ip == noite) {
        r.innerText = (`Turno da noite`)
    }
}