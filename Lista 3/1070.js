let X = parseInt(prompt('Digite um valor inteiro'))
if (X%2 == 0) {
    X = X + 1  
}

for (let i = 1; i < 6  ; i++) {
    console.log(X)
    X += 2
}

