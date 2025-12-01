
/*FUNCION DECLARADA */

console.log(saludar("Johann"));
function saludar(nombre){
    console.log(`Hola ${nombre}, que comeras hoy?`);
    return;
}



/*
 ------------ Funciones expresadas -----------------------
            (function expressions)
Son funciones declaradas dentro de la asignación de una variable.
Estas funciones pueden ser anónimas ( no tienen nombre ).
Las funciones expresadas no tiene hoisting, porque no se
carga en memoria hasta que se utilice.
sintaxis:
    const nombreVariable = function nombreFuncion (parámetros){
        instrucciones;
    };
*/
/**
 * 
 * Funcion que recibe el nombre y apellido y retorna el nombre completo
 */

const printFullName = function (firstName, lastName){
    return `${firstName} ${lastName} estudiante de la cg62`
};
console.log(printFullName("Johan", "Gonzalez"));


const imprimirNombre =  (nombre, apellido) =>  `${nombre} ${apellido} estudiante de la cch62`;
console.log(imprimirNombre("Mari Paz", "Santos"));

/*-------------------------PARÁMETROS POR DEFECTO -------------------

             (default parameters)
Inicializa un parámetro de la función, si no se envía el argumento cuando se invoca
*/
const makeCoffe = ( type = "Americano" ) => `Preparando un café ${type}`;
console.log( makeCoffe("Latte") ); // Preparando un café Latte
console.log(makeCoffe()); //Preparando un café undefined

const areaRectangulo = (base, altura) => `El area del rectangulo es: ${base * altura}` ;
console.log(areaRectangulo(5, 10));


 /*
  Pase de datos:
    - Por valor: Se crea una copia independiente del dato. 
      Si modificas la copia, el original NO cambia.
    - Por referencia: Se pasa la dirección de memoria (referencia), 
      no el dato en sí. Si modificas algo a través de esa referencia, el original SÍ cambia.
 */
/*
 ------------ Funciones de Callback -----------------------
 Es una función(definida, expresada, arrow, anónima) que se pasa 
 a otra función como argumento.
 Se pasa en el argumento como referencia ( sin parentesis).
 */

// Aplicando funciones de callback
// 1. La función principal está "Cerrada" (no la tocamos más)
const calculate = (a, b, operationFunction) => {
    return operationFunction(a, b);
};

// console.log(`Usando incorrectamente la función: ${calculate( 5, 3, "sum")}`); // operationFunction is not a function

// 2. Definimos operaciones básicas
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
// Crear una función que sume dos números
const sum = (a, b) => a + b;
const divide = (a, b) => a / b;


console.log(`Realizando una resta: ${calculate(5, 3, subtract)}`); // 2
console.log(`Realizando una multiplicación: ${calculate(5, 3, multiply )}`); // 15
// Aplicar a la función calculate la función suma
console.log(`Realizando una suma: ${calculate(5, 3, sum )}`); // 8
console.log(`Realizando una división: ${calculate(6, 3, divide )}`); // 2

// Aplicar una función que calcule la potencia de un número
console.log(`Realizando una división: ${calculate(6, 3, (a, b) => a ** b ) }`); // Math.pow(a,b) 
// Aplicar una función que calcule el residuo de una devisión, para saber si 6 es divisible entre 3
console.log(`residuo de 7 entre 3 ${calculate(7, 3, (a,b)=> a%b )}`); // 1

var a = 10;
let b = 20;
const c = 30;
const d = 40;
const e = 50;
const f = 60;
const g = 70;


const cambiarValores = (a, b, c) => {
  /*

   Muchas instrucciones

  */ 
  a = 100;
  b = 200;
  c = 300;
  var d = 400;
  let e = 500;
  const f = 600;
  console.log(a, b, c);
}
