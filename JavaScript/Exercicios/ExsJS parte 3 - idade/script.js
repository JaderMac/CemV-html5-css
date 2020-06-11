function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var AnoNasc = document.getElementById('AnoNasc')
    var idadeAtual = ano - AnoNasc.value
    var sexo = ''
    var res = document.querySelector('div#res')

    if (AnoNasc.value.length == 0 || AnoNasc.value > ano){
        res.innerHTML = '[ERRO] - Verifique os dados e tente novamente!'
    } else{
        var campSexo = document.getElementsByName('sexo')[0]
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (campSexo.checked) {
            sexo = 'Homem'
            if (idadeAtual > 0 && idadeAtual <= 10){
                img.setAttribute('src','foto-bebe-m.png')             
            } else if (idadeAtual > 10 && idadeAtual <= 18){
                img.setAttribute('src','foto-jovem-m.png')
            } else if(idadeAtual > 18 && idadeAtual < 50){
                img.setAttribute('src','foto-adulto-m.png')
            } else {
                img.setAttribute('src','foto-idoso-m.png') 
            }   
        } else {
            sexo = 'Mulher' 
            if (idadeAtual > 0 && idadeAtual <= 10){
                img.setAttribute('src','foto-bebe-f.png')             
            } else if (idadeAtual > 10 && idadeAtual <= 18){
                img.setAttribute('src','foto-jovem-f.png')
            } else if(idadeAtual > 18 && idadeAtual < 50){
                img.setAttribute('src','foto-adulto-f.png')
            } else {
                img.setAttribute('src','foto-idoso-f.png') 
            } 
        }
        res.style.textAlign = 'center';
        res.innerHTML = `Detectamos ${sexo} de ${idadeAtual} anos.`
        res.appendChild(img);
    }
}