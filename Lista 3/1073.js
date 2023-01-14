let N = parseInt(prompt('Digite um valor inteiro'))

if (N < 5 || N > 2000) {
    console.log('Erro! Por favor coloque um valor adequado')
} else {
    if (N%2!=0) {
        N = N - 1
    }
    for (let i = 2; i <= N; i += 2) {
        console.log(`${i}^2 = ${i**2}`)
    }
}