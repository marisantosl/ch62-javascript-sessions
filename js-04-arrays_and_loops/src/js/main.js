
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

// Acceder al primer elemento
console.log( techStack.length ); // 3
console.log(`Accediendo al primer elemento:  ${ techStack[0] }` ); // "HTML"

// Accediendo al segundo elemento
console.log(`Accediendo al segundo elemento: ${ techStack[1] }`);

// Acceder al último elemento (longitud - 1)
console.log(`Accediendo al último elemento: ${ techStack[ techStack.length - 1 ] }`);

// --- 3. Modificación de Elementos ---
techStack[1] = "Sass"; // Cambiando "CSS" por "Sass"
console.log("Después de la modificación:", techStack); // ["HTML", "Sass", "JavaScript"]

// Agregar un nuevo elemento al final
// techStack[3]
techStack[ techStack.length ] =  "TypeScript"; // ["HTML", "Sass", "JavaScript", "TypeScript"]


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


// --- Eliminar Elementos ---

// 3. pop(): Elimina el ÚLTIMO y lo devuelve
const removedItem = shoppingList.pop();
console.log(`Eliminado con pop: ${removedItem}`); // "Pan"
console.log("Lista actual:", shoppingList);

// 4. shift(): Elimina el PRIMERO y lo devuelve
const firstRemoved = shoppingList.shift();
console.log(`Eliminado con shift: ${firstRemoved}`); // "Café"

// --- Método splice() ---
// Permite eliminar o agregar elementos en cualquier posición
const colors = ["Rojo", "Verde", "Azul", "Amarillo", "Morado", "Naranja"];
console.log("Colores iniciales:", colors.toString() ); // "Rojo,Verde,Azul,Amarillo,Morado,Naranja"
console.log("Colores iniciales:", colors.join(" - ") ); // "Rojo - Verde - Azul - Amarillo - Morado - Naranja"

// Agregar 2 elementos en el índice 2, sin eliminar otros elementos
colors.splice(2, 0, "Rosa", "Cian");
console.log("Después de agregar con splice:", colors.toString() );


// 1. Crea un array 'guestList' con 2 nombres.
// 2. Agrega un invitado al final.
// 3. Agrega un invitado al principio
// 4. Elimina al segundo invitado (índice 1) y agrega a otro en su lugar.
// 4. Muestra la lista final.

const guestList = ["José","María"];
guestList.push("Lucia"); //José, María, Lucia
guestList.unshift("Lucas"); //Lucas, José, María, Lucia
guestList.splice(1,1, "David") //Lucas, David, María, Lucia
console.log("Lista de invitados:", guestList.join(" - ")); //Lucas - David - María - Lucia

/*================================================================
   BLOQUE 3: ESTRUCTURAS DE DATOS - PILAS Y COLAS 
   ================================================================
   Las pilas y colas son estructuras de datos que organizan cómo se 
   almacenan y acceden a los elementos.

   1. LIFO (Last-In, First-Out) - Pila (Stack)
   Concepto: El último elemento en entrar es el primero en salir.
*/

// Navegamos a sitios (push)
const historyStack = [];
historyStack.push("google.com");
historyStack.push("youtube.com");
historyStack.push("github.com");

console.log("Historial actual:" + historyStack); // ["google.com", "youtube.com", "github.com"]

// Presiono el botón de "atrás"
console.log(`Regresando a: ${ historyStack.pop() }`); // "github.com"

/*   2. FIFO (First-In, First-Out) - Cola (Queue)
   Concepto: El primer elemento en entrar es el primero en salir.
*/
const printQueue = [];
printQueue.push("thesis.pdf");
printQueue.push("meme.png");
printQueue.push("invoice.docx");

console.log("Cola de impresión:", printQueue); // ["thesis.pdf", "meme.png", "invoice.docx"]

// La impresora termina el primer trabajo (shift)
const printingNow = printQueue.shift();

console.log(`Imprimiendo: ${printingNow}`); // thesis.pdf (El primero que llegó)

/* ================================================================
 Ejercicio:
   Crea un array llamado 'taskList' para gestionar tareas.
   1. Agrega 3 tareas usando 'push'.
   2. Muestra la lista completa de tareas.
   3. Las tareas normales se atienden en orden de llegada (FIFO)
   3.1 Retira (elimina) la primera tarea de la lista y muéstrala.
   4. No dan un tarea URGENTE que debe ser atendido inmediatamente.
    Por lo que debes poner al inicio de la lista.
   5. Muestra la lista actualizada.
   6. Atiende (elimina) la primera tarea de la lista y muéstrala.
*/
const taskList = [];
taskList.push("Limpiar la cocina");
taskList.push("Barrer");
taskList.push("Lavar ropa");
console.log("Lista de tareas:", taskList.join("-"));
taskList.unshift("Hacer el desayuno");
console.log("Lista de tareas actualizada:", taskList.join("-"));
const tareaRealizada = taskList.shift();
console.log(`Primer tarea realizada: ${tareaRealizada}`);
console.log("Tareas pendientes", taskList.join("-"));
