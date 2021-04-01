let nameMajor: string = 'Strider';
let hp: number = 95;
let isAlive: boolean = true;

/* 
    Malas prácticas de typescript, se puede definir una variable como una variable
    que puede almacenar dos tipos de datos, por ejemplo de tipo número o de tipo string,
    esto es una mala práctica, dado que typescript nos incita a tener un tipado estricto
    deberíamos mantener las variables lo mas detalladas posibles para evitar errores
    de tipado.
*/
let hpCharacter: number | string = 85;

hpCharacter = 'FULL';



nameMajor = 'Fernando';

console.log(isAlive);