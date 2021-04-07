
/*
    Las funciones de typescript también deben especificar el retorno de la misma en 
    la medida de lo posible, si sabemos que la el resultado de la suma es un número
    debemos decirle a la función qué el resultado a devolver es un number.
*/

import { isConstructorDeclaration } from "typescript";


function sumar(a:number,b:number): number {
    return a + b;
}

//Función flecha la cual hemos tipado al igual que la anterior.

const sumarFlecha = (a:number,b:number):number => {
    return a + b;
}

//Una buena práctica en typescript es colocar primero los argumentos obligatorios
//luego los opcionales, y finalmente los que tengan un valor por defecto

function multiplicar(a:number, b?:number, base:number = 2):number {
    return a * base;
}

const resultado = sumar(10, 20);

const resultado2 = multiplicar(10,20);

console.log(resultado);

//En las interfaces tenemos que definir todos los elementos que queremos que tenga el objeto
// de esta manera restringimos como funciona un objeto y nos sirve de documentación
//En las interfaces también debemos definir las funciones que tendra el objeto.
//También podemos definir que argumentos va a recibir las funciones dentro del interface.

interface PersonajeLor {
    nombre:string;
    pv:number;
    mostrarHp: () => void;
}

//Si señalamos la función como void le estamos diciendo al programa que esta función 
//no retorna ningún valor.
//En las funciones podemos colocar un objeto definido como argumento para ayudar al Intellisense
//y  ayudarnos a nosotros a la hora de escribir el código.

function curar (personaje: PersonajeLor, curarX:number): void {

    personaje.pv += curarX;

}

//A la hora de construir el objeto podemos definirlo con la interface para asegurarnos
//que va a contener los parametros que necesitamos.

const nuevoPersonaje: PersonajeLor = {
    nombre: 'Strider',
    pv:50,
    mostrarHp() {
        console.log('Puntos de vida', this.pv);
    }
}

curar(nuevoPersonaje, 10);

nuevoPersonaje.mostrarHp();