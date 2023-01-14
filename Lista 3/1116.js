let N = parseInt(prompt('Digite o numero de vezes desejada'))


for (let i = 1; i <= N; i++){
    let [X, Y] = prompt('Digite 2 valores inteiros:').split(' ')
    X = parseInt(X)
    Y = parseInt(Y)
    if (Y == 0) {
        console.log('divisão impossivel')
    } else {
        console.log((X/Y).toFixed(1))
    }
}


