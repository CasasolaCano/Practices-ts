

interface Passenger {
    name: string;
    childrens?: string[]
}

const passenger1: Passenger = {
    name: 'Fernando'
}

const passenger2: Passenger = {
    name: 'Melissa',
    childrens: ['Natalia' , 'Gabriel']
}

/*
    Como los hijos son opcionales, podemos hacer un encadenamiento opcional (secure operator)
    para explicarle al programa que si los hijos no existen aplique un valor por defecto (0).
*/

function printChildrens(passenger: Passenger): void {

    const childrensNumber = passenger.childrens?.length || 0;

    console.log(childrensNumber);
}

printChildrens(passenger1);