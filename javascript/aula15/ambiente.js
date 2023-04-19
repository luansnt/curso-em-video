let num = [5, 8, 9, 3]
num.push(1)
num.sort()
console.log(num)
console.log(`O vetor tem ${num.length} posiçoes`)
let pos = num.indexOf(3)

if(pos == -1){
    console.log('O valor nao foi encontrado na lista')
}else{
    console.log(`O valor ${num[pos]} esta na posição ${pos} `)
}
