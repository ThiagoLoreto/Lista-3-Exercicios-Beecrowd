let N = 0 

while (N < 2) {
    let nota = parseFloat(prompt('Escreva uma nota:'))
    if(N == 0) {
        if (nota < 0 || nota > 10) {
            console.log('nota invalida')
        } else {
            var nota1 = parseFloat(nota)
            N += 1
        }
    }
    if (N == 1) {
        if (nota < 0 || nota > 10) {
            console.log('nota invalida')
        } else {
            var nota2 = parseFloat(nota)
            console.log(`media = ${((nota1 + nota2)/2).toFixed(2)}`)
            console.log('novo calculo(1-sim 2-não)')
            while (N == 1) {
                var X = parseInt(prompt('Digite se quer continuar calculando ou não.'))
                if (X == 1) {
                    N = 0
                } else if (X == 2) {
                    N++
                } else {
                    console.log('novo calculo(1-sim 2-não)')
                }
            }
        }
    }
}