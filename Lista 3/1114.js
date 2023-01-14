while(true) {
    let senha = parseInt(prompt('Digite a senha de quatro digitos:'))
    if (senha != 2002) {
        console.log('Senha Inválida')
    } else if (senha == 2002) {
        console.log('Acesso Permitido')
        break;
    }
}