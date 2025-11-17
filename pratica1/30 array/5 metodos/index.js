const r = document.getElementById('res')
const pessoa = ["Erick", "Santana", 20, "Iniciante"]//Array

const lista1 = ["Feijão", "Arroz", "Macarrão", "Banana", "Pera", "Melancia"]
const  lista2 = ["Suco", "Guarana", "Àgua", "Carne"]
const  lista3 = ["as", "pera", "Àgsssua", "Carnsssse"]


const jogadores = ["Pipi", "Zeze", "Pele", "Neymar", "Ronaldo", "Messi", "Cristiano Ronaldo", "Wilian"]


/*
const numeros = [1, 90, 50, 60, 23, 2, 45, 100, 10]
const maior20 = numeros.filter(filtragem)
function filtragem(value, index, array) {
    return value > 20
}
r.innerHTML = maior20
*/
//const craques = jogadores.slice(2, 6)
//const superLista = lista1.concat(lista2, lista3)
//pessoa.pop()
//r.innerHTML = pessoa.join("-")
//pessoa.push("Qulquer coisa")
//pessoa.shift()
//pessoa.unshift("È os Guri né pai.")
//delete pessoa[0]
//pessoa.splice(1,3, "Item adicionado1")
//jogadores.sort()
//jogadores.reverse()
//numeros.sort(function(a,b){return a-b})
//numeros.sort(function(a,b){return b-a})

/*
function MaiorNumero(array){
    return Math.max.apply(null, array)
}
*/

/*
 function MenorNumero(array){
        return Math.min.apply(null, array)
    }
*/


  /*
    Os indice mudam.

  1- Método (join)
  Com esse metodo eu posso adicionar qualquer coisa que ele vai adicionar entre os espaços de uma plavra a outra.

    Ex:  r.innerHTML = pessoa.join("-")
-------------------------------------------------------------------------------------------------------------
2- Método (pop) Esse remove oultimo item
   Com esse metodo eu consigo remover o ultimo item de uma lista no caso o (array).

    Ex: pessoa.pop()
    
    Um detalhe eu tenho que deixar o pessoa.pop antes o innerHTMl ou do innerText.
-------------------------------------------------------------------------------------------------------------
3- Método (push) Esse adiciona
    Com esse metodo eu consigo adicionar alguma coisa na lista.

    Ex: pessoa.push("Qulquer coisa")
-------------------------------------------------------------------------------------------------------------
4- Método (shift) Esse metodo remove o primeiro item
    Com esse metodo eu removo o primeiro item da lista no caso o (array)

    Ex: pessoa.shift()
-------------------------------------------------------------------------------------------------------------
5- Método (unshift)
    Com esse metodo eu adiciono alguma coisa no primeiro item da minha lista (array)

    Ex: pessoa.unshift("Qualquer coisa")
-------------------------------------------------------------------------------------------------------------
6- Método (delete)
    Esse metodo deleta o primeiro item, mas diferente dos outros que quando são removidos, esse metodo remove mas os indice continua igual. No caso do ex o Erick é o (indice) 0 e o Santana é o 1 se fosse os metodos anteriores os indice ia mudar já com esse metodo os (indice) continua a mesma coisa.

    Ex: delete pessoa[Por a posição do indice[0,1,2.etc] (delete pessoa[0])
-------------------------------------------------------------------------------------------------------------
7- Método (splice)
    Com esse metodo eu consigo adicionar multiplos valores numa determinada posição que eu desejo.

    Ex: pessoa.splice(1,3, "Item adicionado1")

    Ex:  pessoa.splice(posição,0 esse é se eu quero que 1 item seja deletado e quantos eu quero deletar, "Item adicionado1", "item adicionado2")
-------------------------------------------------------------------------------------------------------------
8- Método (concat)
    Com esse metodo eu consigo concatenar 2 array, no caso eu junto 2 listas em 1 só.

    Ex: const superLista = lista1.concat(lista2) 
    
    E eu posso colocar quantas lista eu quiser nesse ex anterior foi só com 2 agora vais ser com 3

    Ex com 3 lista: const superLista = lista1.concat(lista2, lista3, assim por diante)
-------------------------------------------------------------------------------------------------------------
9- Método (slice)
    Com esse metodo eu consigo fatiar uma matriz eu posso fazer ela pegar de um indice até outro.
    Ex: const craques = jogadores.slice(2, 6)
-------------------------------------------------------------------------------------------------------------
10- Método (sort())
    Com esse metodo é possivel deixar os itens em ordem alfabetica.
    Ex: jogadores.sort() 
-------------------------------------------------------------------------------------------------------------
11- Método (reverse)

    Esse método deixa as palavras ao reverso o ultimo vira o primeiro e assim sucessivamente.
    Ex: jogadores.reverse()
-------------------------------------------------------------------------------------------------------------
12- Método para deixar os números em ordem, (sort()) tambem usa esse.

    Esse a explição é meio dificil mas é só usar do jeito do exemplo que da certo.

    Ex: numeros.sort(function(a,b){return a-b})
    Para deixar os números na ordem certa é só fazer isso
-------------------------------------------------------------------------------------------------------------
13 Método para deixar o número do maior para o menor (sort)

    Usa o mesmo raciocinio do outro mas muda o a e o b
    Ex: numeros.sort(function(a,b){return b-a})
-------------------------------------------------------------------------------------------------------------
14- Metodo para pegar um número maximo dentro de uma lista (array)

    Para esse metodo eu preciso fazer uma função exemplo asseguir.

    Ex: function MaiorNumero(array){
        return Math.max.apply(null, array)
    }
    r.innerHTML = MaiorNumero(numeros) No InnerHTML eu tenho que por isso.
-------------------------------------------------------------------------------------------------------------
15- Método para pegar o menor número.
    
    È o mesmo conceito do anterior mas muda algumas coisas.
    Para por um número menor é só trocar o (max) por (min)

    Ex: function MenorNumero(array) {
        return Math.min.apply(null, array)
       }
    r.innerHTML = MenorNumero(numeros)
-------------------------------------------------------------------------------------------------------------
16- Filtrar os números.

    Eu ecolho os números que eu quero filtrar e eu filtro com essa funçãozinha.
    Ex: const numeros = [1, 90, 50, 60, 23, 2, 45, 100, 10]
    const maior20 = numeros.filter(filtragem)
    function filtragem(value, index, array) {
    return value > 20
    }
    r.innerHTML = maior20

-------------------------------------------------------------------------------------------------------------
    Com alguns metodos eu preciso criar um variavel e colocar o nome da variavel no innerText ou innerHTML e por o metodo dentro dessa variavel
  */