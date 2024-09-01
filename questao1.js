function isFibonnaci(numero) {
    // primeiros numeros da sequencia de fibonnaci
    let primValor = 0;
    let seguValor = 1;
    // variavel pra ver se o numero pertence a sequencia de fibonnaci
    let pertence = false;

    for(let i = 0; seguValor < numero; i++) {
        // calcula o proximo valor da sequencia de fibonnaci
        let proxFibonnaci = primValor + seguValor;
        // verifica se o numero dado e igual ao valor calculado
        pertence = proxFibonnaci === numero;

        primValor = seguValor;
        seguValor = proxFibonnaci;
    }
    // verificacao manual para os dois primeiros valores
    pertence = 0 === numero ? true : pertence;
    pertence = 1 === numero ? true : pertence;

    return pertence;
}

// chamada da função
console.log(isFibonnaci(0));