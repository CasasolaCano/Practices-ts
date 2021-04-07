
/*
    Las funciones de typescript también deben especificar el retorno de la misma en 
    la medida de lo posible, si sabemos que la el resultado de la suma es un número
    debemos decirle a la función qué el resultado a devolver es un number.
*/


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