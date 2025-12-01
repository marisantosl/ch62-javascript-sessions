
console.log("Sesión JS-04: Arrays y Bucles");

/* ================================================================
   ARRAYS (ARREGLOS) 
   ================================================================
   Un Array es una estructura de datos que nos permite almacenar 
   múltiples valores en una sola variable.
   
   Analogía: Una cajonera donde cada cajón tiene un número (índice)
   para identificar qué hay dentro.
*/
const myArray = [true, 42, "Hola", null, { nombre: "Juan" }, [1, 2, 3 ]];

// --- 1. Definición ---
// Sintaxis moderna: Usamos corchetes [] (Array Literal)
// Nota: Usamos 'const' aunque el contenido cambie. Lo que es constante
// es la referencia en memoria, no los datos internos.

const frutas = []; // empty array
const fruits = new Array(); // array using constructor (less common)

const numeros = [ 5 ]; // array with one element
const numbers = new Array(5); // array with 5 empty slots [ <5 empty items> ]

// --- 2. Acceso a Elementos ---
// Los índices comienzan en 0 (Zero-based indexing).
// [0] -> Primer elemento
// [length - 1] -> Último elemento

const techStack = ["HTML", "CSS", "JavaScript"];
console.log(`accediendo al primer elemento de mi arreglo ${techStack[0]}`);

//accediendo al 2 elemento
console.log(`accediendo al primer elemento de mi arreglo ${techStack[1]}`);

//accediendo al ultimo (longitud menos 1)
console.log(`accediendo al ultimo elemento de mi arreglo ${techStack[techStack.length-1]}`);

// --- 3. Modificación de Elementos ---
techStack[1] = "Sass"; // Cambiando "CSS" por "Sass"
console.log("Después de la modificación:", techStack); // ["HTML", "Sass", "JavaScript"]

//Agrega un nuevo elemento al final
techStack[techStack.length]= "TypeScript";

//techStack[3] con este nno es recomendado poque no sabes cual es el último elemento a veces

/* ================================================================
   BLOQUE 2: MÉTODOS DE ARRAYS (Add/Remove) 
   ================================================================
   JavaScript nos da métodos para manipular la lista como una pila o cola.
*/
const shoppingList = ["Leche", "Huevos"];
// 1. push(): Agrega al FINAL (El más usado)
// Retorna la nueva longitud del array.
shoppingList.push("Pan"); 
console.log("Push:", shoppingList); // ["Leche", "Huevos", "Pan"]
// 2. unshift(): Agrega al INICIO (Mueve todos los índices, es más lento)
shoppingList.unshift("Café");
console.log("Unshift:", shoppingList); // ["Café", "Leche", "Huevos", "Pan"]