function verif() {
    // Variaveis do input e do paragrafo que vai sair o resultado.
    let ip = document.getElementById('iturno').value 
    let r = document.getElementById('res')

    // Variaveis pré definidas!
    const dia = 'M'
    const tarde = 'T';
    const noite = 'N';

    // If, else-if e else.
    if (ip == dia) {
        r.innerText = (`Turno da manhã`)
        document.body.style.backgroundColor = 'rgb(15, 125, 216)'
    }else if (ip == tarde) {
        r.innerText = (`Turno da Tarde`)
        document.body.style.backgroundColor = 'rgb(216, 109, 15)'
    }else if ( ip == noite) {
        r.innerText = (`Turno da noite`)
        document.body.style.backgroundColor = 'rgb(41, 48, 46)'
    }else {
       alert('[ERRO] Escreva no campo abaixo com umas das letras em letras maiusculo.')
    }
}