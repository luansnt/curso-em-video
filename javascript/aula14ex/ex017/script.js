function gerar(){
    const num = document.querySelector('#txtnum').value
    var res = document.querySelector('#tabuada')
    
    if(num.length == 0){
        alert("Por favor, digite um numero!")
    }else{
        res.innerHTML = ""
        for(var i=1; i <= 10;i++){
            var total = num*i
            res.innerHTML += `<option>${num} x ${i} = ${total}</option>`
        }
    }
}