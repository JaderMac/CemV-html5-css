let amigo = {
    nome: 'Jader',
    sexo: 'M',
    peso: 123,
    engordar(p=0){
        console.log(`Engordou ${p} kg(s).` )
        this.peso += p
    }
}
console.log(`${amigo.nome} pesa ${amigo.peso} kg.`)
amigo.engordar(12)
console.log(`${amigo.nome} pesa ${amigo.peso} kg.`)