function Torre(numeros) {
    return `A torre anda em linhas retas e quantas casas quiserem, nessa jogada, ele andou ${numeros} de casas`;
}

function Bispo(numeros) {
    return `O bispo anda em linhas diagonais e quantas casas quiserem, nessa jogada, ele andou ${numeros} de casas`;
}

console.log(Torre(5));
console.log(Bispo(10));