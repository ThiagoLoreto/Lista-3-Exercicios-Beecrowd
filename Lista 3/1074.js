let N = parseInt(prompt('Digite um valor inteiro'))

for (let i = 1; i <= N; i++) {
    let num = parseInt(prompt('Digite um valor'))
    if (num==0) {
        console.log('NULL')
    } else if (num%2==0){
        if (num > 0) {
            console.log('EVEN POSITIVE')
        } else {
            console.log ('EVEN NEGATIVE')
        }
    } else {
        if (num > 0) {
            console.log('ODD POSITIVE')
        } else {
            console.log('ODD NEGATIVE')
        }
    }
}
