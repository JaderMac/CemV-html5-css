function fatorial(n){
    let fat = 1
    for (let c = n; c > 1; c--){
        fat *= c
    }
    return fat
}

// recursiva
function fato(n){
    if (n == 1){
        return 1
    } else {
        return n * fato(n-1)
    }
}

console.log(fatorial(5))
console.log(fato(5))
