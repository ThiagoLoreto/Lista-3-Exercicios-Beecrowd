let N = parseInt(prompt('Digite um valor'))

if (N < 2 || N > 1000) {
    console.log('Coloque um valor válido')
} else {
    for (let i = 1; i <= 10; i++) {
        console.log (`${i} x ${N} = ${i*N}`)
    }
}