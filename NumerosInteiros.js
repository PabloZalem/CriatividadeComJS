const lista = [-3, -2, -1, 0, 1, 2, 3];
let n = 2;

if (lista.includes(n)) {
    console.log("Algarismo esta contido dentro do conjunto")
    
    if (n < 0) {
        console.log("O elemento é do conjunto dos inteiros")
    } else {
        console.log("O elemento é do conjunto dos naturais");
    }

} else {
    console.log("Algarismo nao esta contido detro do conjunto")
}