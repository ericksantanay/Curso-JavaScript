function verif() {
    // Variaveis do input e do paragrafo que vai sair o resultado.
    let ip = document.getElementById('iturno').value 
    let r = document.getElementById('res')

    // Variaveis pré definidas!
    const dia1 = 'D'
    const tarde = 'T';
    const noite = 'N';

    // If, else-if e else.
    if (ip == dia) {
        r.innerText = (`Turno da manhã`)
    }else if (ip == tarde) {
        r.innerText = (`Turno da Tarde`)
    }else if ( ip == noite) {
        r.innerText = (`Turno da noite`)
    }
}