// Conjunto de numeros inteiros
let a = [-3, -2, -1, 0, 1, 2, 3]

// Adicao
// 1- Fechamento:
let x = 2 + (- 5)
if (x < 0) {
    console.log("X pertence ao conjunto dos inteiros");
} else {
    console.log("X nao pertence ao conjunto dos inteiros");
}

// 2- Associatividade
let y = (1 + 2) + 3;
let z = 1 + (2 + 3);
if (y === z) {
    console.log("Sao associativos")
} else {
    console.log("Nao sao associativos")
}

// 3- Elemento Neutro
x = 4;
y = 0;
z = x + y;
if (z == x) {
    console.log("Elemento neutro")
} else {
    console.log("Nao é elemento neutro")
}

// 4- Inverso(oposto)
x = 7 + (-7);
if (x === 0) {
    console.log("Sao Inverso")
} else {
    console.log("Nao sao inverso")
}

// Multiplicaca
// 1- Fechamento
a = (-2) * 3;
if (a < 0) {
    console.log("Pertence ao conjunto do inteiros")
} else {
    console.log("Nao pertence ao conjunto dos inteiro")
}

// 2- Associativa
a = (2 * 3) * 4;
b = 2 * (3 * 4);
if (a === b) {
    console.log("Sao associativas")
} else {
    console.log("Nao sao associativas")
}

// 3- Elemento neutro
a = 5 * 1;
b = 5;
if (a === b) {
    console.log("E elemento neutro")
} else {
    console.log("Nao e elemento neutro")
}

// Distributiva
// 1- Multiplicacao distribui sobre adicao
a = 2 * (3 + 4);
b = 2 * 3 + 2 * 4;
if (a === b) {
    console.log("Possui as caracteristicas de distributiva")
} else {
    console.log("Nao possui as caracteristicas de distributiva")
}