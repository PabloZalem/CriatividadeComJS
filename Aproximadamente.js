var a = 5;

if (a % 10 >= 5) { // Se o resto da divisão por 10 for maior ou igual a 5
    a = a + (10 - (a % 10)); // arredonda para o próximo múltiplo de 10
    // a esta mais proximo do que proximo multiplo de 10 do que do anterior
    // Exemplo: 57 -> 60
} else { 
    a = a - (a % 10); // arredonda para o múltiplo de 10 anterior
    // a esta mais proximo do que proximo multiplo de 10 do que do anterior
    // Exemplo: 52 -> 50
}

console.log(a);