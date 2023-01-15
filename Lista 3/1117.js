let N = 0 

while (N < 2) {
    let nota = parseFloat(prompt('Escreva uma nota:'))
    if(N == 0) {
        if (nota < 0 || nota > 10) {
            console.log('nota invalida')
        } else {
            var nota1 = parseFloat(nota)
            N = N + 1
        }
    } else if (N == 1) {
        if (nota < 0 || nota > 10) {
            console.log('nota invalida')
        } else {
            var nota2 = parseFloat(nota)
            N++
        }
    }
}
console.log(`media = ${((nota1 + nota2)/2).toFixed(2)}`)

/*
let N = 1
let notas = []

while (N < 3){
    let nota = parseFloat(prompt('Escreva uma nota:'))
    if(N <= 2) {
        if (nota < 0 || nota > 10) {
            console.log('nota invalida')
        } else {
            notas.push(nota)
            N++
        }
    }
}
console.log(`média = ${(notas[0] + notas[1])/2}`)
*/


