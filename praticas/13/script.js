function dobrar(){
    var ip = Number(document.getElementById('inum').value)
    var dobro = 2
    var r = document.getElementById('res')
    var soma = ip * dobro
    r.innerText = (`${soma}`)
}
