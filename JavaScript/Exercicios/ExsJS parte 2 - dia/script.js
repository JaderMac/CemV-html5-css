function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = Number(data.getHours)
    //hora = 10
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12){
        img.src = 'manha.png'
        document.body.style.background = '#fea71d'
    } else if (hora >= 12 && hora <= 18) {
        img.src = 'tarde.png'
        document.body.style.background = '#445606'
    } else {
        img.src = 'noite.png'
        document.body.style.background = '#565658'
    }

}