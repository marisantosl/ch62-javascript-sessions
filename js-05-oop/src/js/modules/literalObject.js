/* Ejemplo de Objeto Literal
  - Útil para configuraciones únicas .
  - No escalable para crear múltiples entidades.
  - Fácil de crear y usar.
  - Evitar tener decenas de variables sueltas.


Symbol:
Un Symbol es un tipo de dato primitivo introducido en ES6. 
Su característica principal es que es único e inmutable.

Se utiliza principalmente para crear propiedades "ocultas" o identificadores 
únicos en objetos que no colisionen con otras claves (keys), 
incluso si tienen el mismo nombre descriptivo.

*/

const internalId = Symbol("id");

const aliceUser = {
    [internalId]: "User-T100",
    name: "Alice",
    lastName: "Smith",
    age: 30,
    email: "alice@gmail.com",

    getFullName() {
        // return `${aliceUser.name} ${aliceUser.lastName} ${aliceUser.age}`;
        return `${this.name} ${this.lastName} ${this.age}`;
    },
    stringify() {
        return JSON.stringify(this);
    }
}

export { aliceUser };