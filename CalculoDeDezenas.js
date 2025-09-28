var a = 10;
var b = 100;
var c = 1000;

var dezena1 = a * 10;
var dezena2 = b * 10;
var dezena3 = c * 10;
function CalculoDeDezenas(dezena) {
    return `O valor da dezena é ${dezena}`;
}

console.log(CalculoDeDezenas(dezena1));
console.log(CalculoDeDezenas(dezena2));
console.log(CalculoDeDezenas(dezena3));