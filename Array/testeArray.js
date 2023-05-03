var frutas = ['manga', 'banana', 'laranja', 'uva']
console.log('teste de array')
console.log(frutas.length)

frutas[4] = 'Jambo'
console.log(frutas.length)
console.log(frutas)

// add elemento:
frutas.push('Abacaxi')
console.log(frutas)

// retirando o ultimo elemento
frutas.pop()
console.log(frutas)

// retirando o primeiro elemento
frutas.shift()
console.log(frutas)

// colocar um elemento no inicio do array
frutas.unshift('Morango')
console.log(frutas)

// retirar um elemento em determinada posição (a partir do elemento, numero de elementos após (nulo é todos))
frutas.splice(2, 2, 'Melancia', 'Tangerina')
console.log(frutas)

// acha a posição do termo informado
var posicao = frutas.indexOf('Melancia')
console.log(posicao)

// iterar uma lista
for (var i=0; i < frutas.length; i++) {
    console.log(frutas[i])
}

// para cada elemento
frutas.forEach(element => {
    console.log(element)

});
