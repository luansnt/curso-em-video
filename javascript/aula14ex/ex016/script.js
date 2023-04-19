function contar(){
    var inicio = document.querySelector('#txtini').value
    var fim = document.querySelector('#txtfim').value
    var passo = Number(document.querySelector('#txtpas').value)
    var res = document.querySelector('#res')

    if(inicio.length == 0 || fim.length == 0){
        res.innerHTML = "Impossivel contar"
    }else if(passo == 0){
        passo = 1
        alert("Passo inválido! Considerando PASSO 1")
        contando(res, Number(inicio), Number(fim), passo)
    }else{
        contando(res, Number(inicio), Number(fim), passo)
    }
    
}

function contando(res, inicio, fim, passo){
    
    res.innerHTML = "Contando: <br>"
    if (inicio <= fim){
        for(inicio; inicio <= fim; inicio += passo){
            res.innerHTML += inicio + "&#x1F449"
        }
        res.innerHTML += "&#x1F6A9"
    }else{
        for(inicio; inicio >= fim; inicio -= passo){
            res.innerHTML += inicio + "&#x1F449"
        }
        res.innerHTML += "&#x1F6A9"
    }

}