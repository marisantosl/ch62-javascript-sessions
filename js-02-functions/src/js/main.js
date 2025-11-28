
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
//console.log(`Usando incorrectamente la función: ${calculate( 5, 3, 10)}`); //operationFunction is not a function at calculate (main.js:68:12) at main.js:70:51

const substract = (a,b) => a-b;
const multiply = (a,b) => a * b;
const suma = (a,b) => a + b;

//crear una función de suma
console.log(`Realizando una resta: ${calculate(5,3,substract)}`);
console.log(`Realizando una multiplicacion: ${calculate(5,3,multiply)}`);
console.log(`Realizando una suma: ${calculate(5,3,suma)}`);
//aplicar a la funcion calculate la funcion suma

var a = 10;  //variable global, no variable de funcion
let b = 20;
const c = 30;
const d = 40;
const e = 50;
const f = 60;
const g = 70; //El alcance de esta variable es global, entra en la funcion cambiarValores porque no hay otra variable g dentro de la funcion

const cambiarValores = (a, b, c) => {  //No confundir, aunque se llamen igual, estas variables a,b,c son locales a la funcion cambiarValores, no son las mismas que las globales declaradas arriba

  /*

  Muchas instrucciones

  */
    a = 100; //Cambia solo la copia local, no la variable global
    b = 200; //Cambia solo la copia local, no la variable global
    c = 300; //Cambia solo la copia local, no la variable global
    var d = 400; //Variable local a la funcion
    let e = 500; //Variable local a la funcion
    const f = 600; //Variable local a la funcion
    console.log (a,b,c);

};