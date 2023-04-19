function verificar(){
    var agora = new Date()
    var ano = agora.getFullYear()
    var fAno = document.querySelector('#txtano').value
    var res = document.querySelector('#res')
    
    if(fAno.length == 0 || fAno > ano){
        alert("[ERROR] Verifique os dados e tente novamente")
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno)
        var genero = ''
        var p = document.createElement('p')
        p.setAttribute('id','foto')
        if (fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 10){
                p.textContent = "A melhor fase da vida parabens."
            } else if(idade < 21){  
                p.textContent = "Muita mudança omaga."
            } else if(idade < 50){
                p.textContent = "O mundo é seu."
            } else{
                p.textContent = "Espero que tenha um boa familia."
            }
        }else{
            genero = 'Mulher'
            if(idade >= 0 && idade < 10){
                p.textContent = "Melhor momento para viver."
            } else if(idade < 21){
                p.textContent = "Doi e vai continuar doento guerreira."
            } else if(idade < 50){
                p.textContent = "Nada te para."
            } else{
                p.textContent = "Espero que nao dependa dos outros."
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(p)
    }
}