function containA(string) {
    // transforma qualquer valor dado em uma string
    string = string + '';
    // divide a string em um vetor de caracteres
    splitString = string.toLowerCase().split('');

    let numAs = 0;
    for(i = 0; i < splitString.length; i++) {
        // verifica se o elemento do vetor splitString na posição i é igual a 'a';
        let verifA = splitString[i] === 'a' ? numAs++ : false;
    }
    // verifica se tem algum 'a' na string
    let contA = numAs > 0 ? true : false;
    // retorna um vetor informando se tem a letra 'a' e a qunatidade de vezes que ela aparece
    return [contA, numAs];
}

console.log(containA('the brown fox jumps over the lazy dog'));