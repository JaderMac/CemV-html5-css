var campoNum = document.getElementById('Num')
var botAdd = document.getElementById('adicionar')
var selecLis = document.getElementById('lista')
var botFinal = document.getElementById('finalizar')
var resultado = document.getElementById('result')
var numAdd 
var lista = []
var soma = 0
var media = 0

if (lista.value.length == 0){
    alert('Favor adicionar um número a lista!')
}

function adicionar(){
    var numAdd = Number(campoNum.value)
    var c
    for(var c in lista){
        if(numAdd == lista[c]) {
            c = true
        } else {
            c = false
        }
    }

    // Verificar se número está entre 1 e 100
    if (numAdd <= 0 || numAdd > 100) {
        alert('Número inválido, favor adicionar um número entre 1 a 100.')
    } else if (c == true) {
        alert('Número inválido, este número já consta na lista.')
    } else {
        // Adicionar um número a lista e apresentalo na tela
        lista.push(numAdd)    
        // Criando um item e apresentando na tabela. 
        var item = document.createElement('option')
        item.value = numAdd
        item.text = `Valor ${numAdd} adicionado.`
        selecLis.appendChild(item)
    }
}  

function finalizar(){
    // Limpa tudo
    resultado.innerHTML = ' '

    // Mostrará a quantidade de números cadastrados
    resultado.innerHTML += `<p> Ao todo, temos ${lista.length} números cadastrados.</p>`

    // O maior valor
    lista.sort()
    resultado.innerHTML += `<p>O maior valor informado foi ${lista[(lista.length-1)]}.</p>`

    // O menor valor
    lista[0]
    resultado.innerHTML += `<p>O maior valor informado foi ${lista[0]}.</p>`

    // A soma de todos valores
    for (let c in lista) {
        soma = soma + lista[c]
    }
    resultado.innerHTML += `<p>A somando todos os valores, temos ${soma}.</p>`

    // A média de todos os valores
    media = soma / lista.length
    resultado.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`
}