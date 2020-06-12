function contar(){
    var inicio = document.getElementById('inicio')
    var passo = document.getElementById('passo')
    var fim = document.getElementById('fim')
    var Vini = Number(inicio.value)
    var Vfim = Number(fim.value)
    var Vpasso = Number(passo.value)
    var CampoResposta = document.getElementById('resultado')
    CampoResposta.innerHTML = ''
    if(Vpasso <= 0){
        window.alert('Passo invalido! Considerando passo igual a 1')
        Vpasso = 1
    }

    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert('[ERRO] - Faltam dados.')
    } else { 
        CampoResposta.innerHTML = 'Contando:'
        if(Vini < Vfim){  
            // Crescente
            while(Vini <= Vfim){
                CampoResposta.innerHTML += Vini 
                if( Vini >= Vfim){
                    CampoResposta.innerHTML += '&#x1F3C1;'
                }else{
                    CampoResposta.innerHTML += '&#x1F449;'
                }
                Vini = Vini  + Vpasso
            }
        } else {
            // Decrescente
            for(var c = Vini; c >= Vfim; c -= Vpasso){
                CampoResposta.innerHTML += c
                if( Vini <= Vfim){
                    CampoResposta.innerHTML += '&#x1F3C1;'
                }else{
                    CampoResposta.innerHTML += '&#x1F449;'
                }
            }
        }
    }
}