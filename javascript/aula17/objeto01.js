let amigo ={
    nome : 'José', 
    sexo:'M', 
    peso: 85.4,
    engordar(p){
        console.log('Engordou')
        this.peso += p
    }
}
console.log(amigo.peso)
console.log(amigo.engordar(5))
console.log(amigo.peso)