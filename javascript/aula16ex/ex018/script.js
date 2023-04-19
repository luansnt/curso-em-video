let numeros = [] 
let res = document.querySelector('#res')

function adicionar(){
    var numero = document.querySelector('#txtnum')
    let lista = document.querySelector('#sele')
    let item = document.createElement('option')

    if ((numero.value < 1 || numero.value > 100) || (numeros.indexOf(Number(numero.value)) != -1) ){
        alert("Valor invalido ou já encontrado na lista")
    }else{
        
        item.text = `Valor ${numero.value} adicionado`
        numeros.push(Number(numero.value))
        lista.appendChild(item)
        res.innerHTML = ''
    }
    numero.value = ''
    numero.focus()
}

function finalizar(){

    if(numeros.length == 0){
        alert("Adicione valores antes de finalizar!")
    }else{
        let tamal = numeros.length
        let somado = 0
        let maior = numeros[0]
        let menor = numeros[0]

        for(let i in numeros){
            somado += numeros[i]

            if(numeros[i] > maior){
                maior = numeros[i]
            }
            if(numeros[i] < menor){
                menor = numeros[i]
            }
        }
    
        res.innerHTML = `<p>Ao todo, temos ${numeros.length} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>` 
        res.innerHTML += `<p>O menor valor informado foi ${menor}. </p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${somado}. </p>`
        res.innerHTML += `<p>A média dos valores digitados é ${somado/tamal}. </p>`
    }
    
}