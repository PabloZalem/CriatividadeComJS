var p = "π"; // é 1 caractere com posicao de codigo de 16 bits (UTF-16)
console.log(p.length); // => 1: p consiste em 1 elemento de 16 bits

// String Literais
var vazio = "";
console.log(vazio.length); // => 0
console.log("".length); // => 0

var testing = 'testing';
console.log(testing.length); // => 7

var numeros = "3.14";
console.log(numeros.length); // => 4
console.log("3.14".length); // => 4

var frase = 'Eu sou "muito" legal';
console.log(frase.length); // => 20

// Barra invertida
var ex1 = "two\nlines"; // nova linha, uma string representando duas linhas escrita em uma linha
console.log(ex1); // => two

var ex2 = "one\
            long\
            line"; // string de uma linha longa
console.log(ex2); // => one long line

// Trabalhando com Strings
msg = "Hello, " + "world" + "!"; // concatenação com o operador +
greeting = "Welcome to " + msg;
console.log(greeting); // => Welcome to Hello, world!
console.log(greeting.length); // => 26

// Metodos do String
var s = "hello world";
console.log(s.charAt(0)); // => "h"
console.log(s.charAt(9)); // => "l"
console.log(s.charAt(s.length-1)); // => "d"
console.log(s.slice(1,4)); // => "ell"
console.log(s.slice(-2)); // => "ld"
console.log(s.indexOf("l")); // => 2
console.log(s.lastIndexOf("l")); // => 9
console.log(s.indexOf("l", 3)); // => 3
console.log(s.split(", ")); // => ["hello", "world"]
console.log(s.replace("h", "H")); // => "Hello world"
console.log(s.toUpperCase()); // => "HELLO WORLD"
console.log(s.toLowerCase()); // => "hello world"
console.log(s.trim()); // => "hello world" (sem espaços em branco no início ou fim)