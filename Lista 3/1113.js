for (let i = 1; i < 3; i++) {
    let [X, Y] = prompt('Digite 2 valores inteiros:').split(' ')
    X = parseInt(X)
    Y = parseInt(Y)
    if (X > Y) {
        console.log('DECRESCENTE')
        i = i - 1

    } else if (X < Y) {
        console.log('CRESCENTE')
        i = i - 1
    } else if (X == Y) {
        break;
    }
}

/* 
while (true){
    var [X, Y] = prompt('Digite dois números: ').split(' ').map(Number)
    if (X==Y){
        break;
    }
    if (X<Y){
        console.log('Descrescente')
    } else {
        console.log('Crescente')
    }
}
*/