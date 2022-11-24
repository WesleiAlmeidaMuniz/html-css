function conversor (number){
    const num = ['D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']
    const contaValor = [500,400,100,90,50,40,10,9,5,4,1]

    let soma = number
    let result = ''
    while (soma > 0) {
        for (let i = 0; i < contaValor.length; i++) {
            if (soma >= contaValor[i]) {
                soma -= contaValor[i]
                result += num[i]
                i = 0
            }
        }  
    }
    
    return result
}

console.log(conversor(135));