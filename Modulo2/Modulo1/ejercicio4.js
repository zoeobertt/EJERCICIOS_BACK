/* Ejercicio 4: Determinar si un número es par o impar
Enunciado:
En este ejercicio, aprenderás a utilizar operadores aritméticos y condicionales.
Debes escribir un programa que:
1. Solicite al usuario que ingrese un número entero.
2. Determine si el número es par o impar.
3. Muestre un mensaje indicando si el número es par o impar.
Requisitos:
• Utiliza el operador módulo (%) para comprobar si el número es divisible
por 2.
• Usa una estructura if-else para mostrar el mensaje adecuado.*/

const prompt = require('prompt-sync')();

// Pedimos al usuario que ingrese un número entero
let numero = parseInt(prompt("Ingresa un número entero: ")); // Usamos parseInt para asegurar que es un entero

// Comprobamos si el número es par o impar usando el operador módulo (%)
if (numero % 2 === 0) {
    console.log("El número es par.");
} else {
    console.log("El número es impar.");
}