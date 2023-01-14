while (true) {
    let [X, Y] = prompt('Digite 2 valores inteiros:').split(' ')
    X = parseInt(X)
    Y = parseInt(Y)
    if (X > 0) {
        if (Y > 0) {
            console.log('primeiro')
        } else if (Y < 0) {
            console.log('quatro')
        }
        
    } else if (X < 0) {
        if (Y > 0) {
            console.log('segundo')
        } else if (Y < 0) {
            console.log('terceiro')
        }

    } else if (X == 0 || Y == 0) {
        break;
    }
}