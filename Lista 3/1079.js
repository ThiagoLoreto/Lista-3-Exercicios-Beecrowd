let N = parseInt(prompt('Digite um valor inteiro'))

for(let i = 1; i <= N; i++ ) {
        let [n1, n2, n3] = prompt('Digite 3 valores inteiros:').split(' ')
        n1 = parseFloat(n1)
        n2 = parseFloat(n2)
        n3 = parseFloat(n3)
        let mediaP = (2*n1 + 3*n2 + 5*n3)/10
        console.log(mediaP.toFixed(1))         
}
