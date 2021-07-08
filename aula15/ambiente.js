let num = [5, 8, 2, 9, 3]
/*
num[3] = 6 // Colocar o 6 na posição 3
num.push(7) // Criar um valor 7
num.length // Número de elementos
num.sort() // Coloca os elementos em ordem crescente
num.indexOf(3) // Vê qual a chave do número 3

*/
num.push(1)
num.sort()
console.log(num)
console.log(`Nosso vetor possui ${num.length} posições`)
console.log(`Nosso primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(8)
if (pos == -1) {
    console.log('O valor não foi encontrado')
} else {
    console.log(`O valor 8 está na posição ${pos}`)
}



