
/*
    Los genéricos nos sirven para retornar siempre el valor que estamos deseando.
    Podemos definirle a un genérico que lo que va a recibir va a ser un objeto en concreto.
    De esta manera también podemos asegurarnos que al hacer nuestras peticiones http al backend
    o a la hora de hacer funciones mas complicadas podamos tener siempre el tipo de dato definido.
    Esto nos sirve para usar las funciones que esten implicitas en el tipo de dato usado, ya sea un
    number o una clase creada por nosotros.

*/

function whatTypeIAm<T>(argument: T) {
    return argument;
}

let amString = whatTypeIAm('Hola mundo');
let amNumber = whatTypeIAm(100);
let amArray = whatTypeIAm([1,2,3,4,5,6]);

let amExplicit = whatTypeIAm<number>(1000);

