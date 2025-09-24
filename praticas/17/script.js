function verifica() {
    var ip = Number(document.getElementById('inum').value)
    var r = document.getElementById('res')
    switch (ip) {
        case 1:
        r.innerText = ('Domingo')
        break;

            case 2:
            r.innerText = ('Segunda')
            break;

                case 3:
                    r.innerText = ('Terça')
                    break;

                    case 4:
                        r.innerText = ('Quarta')
                        break;

                        case 5:
                            r.innerText = ('Quinta')
                            break;

                            case 6:
                                r.innerText = ('Sexta')
                                break;

                                case 7:
                                    r.innerText = ('Sábado')
                                    break;

                                    default:
                                        alert('[ERRO] Digite corretamente')
    }
}