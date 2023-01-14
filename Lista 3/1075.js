let N = parseInt(prompt('Digite um valor inteiro'))

for (let i = 1; i <= 10000; i++) {
    if (i%N==2) {
        console.log(i)
    }
}