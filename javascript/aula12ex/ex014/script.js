function carregar(){
    var msg = document.querySelector('#msg')
    var img = document.querySelector('#imagem')
    var escrito = document.querySelectorAll('.escrito')
    var agora = new Date()
    var hora = agora.getHours()
    const corpo = document.body.style

    msg.innerHTML = `Agora são ${hora} horas.`
    if(hora >= 0 && hora < 12){
        img.src = 'manha.png'
        corpo.backgroundColor = '#FEECA2'
    }else if (hora >= 12 && hora <18){
        img.src = 'tarde.png'
        corpo.backgroundColor = '#DB9217'
    }else{
        img.src = 'noite.png'
        corpo.backgroundColor = '#624E4A'
    }
}


