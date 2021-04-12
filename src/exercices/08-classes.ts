
/*
    En las clases se pueden definir las variables de la clase en el propio constructor
    Esto nos deja un código mucho mas escueto pero en algunas ocasiones esto puede llevar a tener
    un código menos limpio, hay que tener cuidado con este tipo de construcción de clases.
*/


class Person {
    

    constructor(
        public name: string,
        public address:string
    ) {}
}

class Heroe extends Person{
    // alterEgo: string;
    // age: number;
    // realName: string;


    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string
    ) {
        super( realName, '');
    }
    
}

const ironman = new Heroe('Ironman', 45, 'Tony');

console.log(ironman);