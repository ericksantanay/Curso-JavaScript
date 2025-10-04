const r = document.getElementById('res')
const pessoa = ["Erick", "Santana", 20, "Iniciante"]//Array

//pessoa.pop()
//r.innerHTML = pessoa.join("-")
//pessoa.push("Qulquer coisa")
//pessoa.shift()
//pessoa.unshift("È os Guri né pai.")
delete pessoa[0]
r.innerHTML = pessoa







  
  /*
    Os indice mudam.

  1- Metodo (join)
  Com esse metodo eu posso adicionar qualquer coisa que ele vai adicionar entre os espaços de uma plavra a outra.     
    Ex:  r.innerHTML = pessoa.join("-")
-------------------------------------------------------------------------------------------------------------
2- Metodo (pop) Esse remove oultimo item
   Com esse metodo eu consigo remover o ultimo item de uma lista no caso o (array).
    Ex: pessoa.pop() 
    Um detalhe eu tenho que deixar o pessoa.pop antes o innerHTMl ou do innerText.
-------------------------------------------------------------------------------------------------------------
3- Metodo (push) Esse adiciona
    Com esse metodo eu consigo adicionar alguma coisa na lista.
    Ex: pessoa.push("Qulquer coisa")
-------------------------------------------------------------------------------------------------------------
4- Metodo (shift) Esse metodo remove o primeiro item
    Com esse metodo eu removo o primeiro item da lista no caso o (array)
    Ex: pessoa.shift()
-------------------------------------------------------------------------------------------------------------
5- Metodo (unshift)
    Com esse metodo eu adiciono alguma coisa no primeiro item da minha lista (array)
    Ex: pessoa.unshift("Qualquer coisa")
-------------------------------------------------------------------------------------------------------------
6- Metodo (delete)
    Esse metodo deleta o primeiro item, mas diferente dos outros que quando são removidos, esse metodo remove mas os indice continua igual. No caso do ex o Erick é o (indice) 0 e o Santana é o 1 se fosse os metodos anteriores os indice ia mudar já com esse metodo os (indice) continua a mesma coisa.
    Ex:
  */