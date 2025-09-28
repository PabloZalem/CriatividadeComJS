var a = 10;
var b = 5;
var c = 8;

var equacao1 = a + b - c;
var equacao2 = a - b + c;
var equacao3 = a + b + c;

function SomaESubtracao(equacao) {
    return `O resultado da equação é ${equacao}`;
}
console.log(SomaESubtracao(equacao1));
console.log(SomaESubtracao(equacao2));
console.log(SomaESubtracao(equacao3));