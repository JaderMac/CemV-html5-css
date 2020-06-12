function tabuada(){
    var multi = document.getElementById('Multi')
    var DivRes = document.getElementById('resultado')

    if (multi.value.length == 0){
        window.alert('Favor insira um número para calcular a tabuada!')
    }
    var VlrMult = Number(multi.value)
    DivRes.innerHTML = 'Calculando <br>'

    for(var i = 0; i <= 10; i ++){
        var res
        res = VlrMult * i
        DivRes.innerHTML += `${VlrMult} x ${i} = ${res} <br>`
    }
    
}