

export interface Product {
    desc: string;
    price: number;
}

const telephone: Product = {
    desc: 'Nokia A1',
    price: 150
}

const tablet: Product = {
    desc: 'iPad Air',
    price: 350
}

/*
    En esta función desestructuramos el producto dentro del bucle foreach, al igual que con los ejemplos
    de desestructuración de objetos, esto nos ayuda a mantener un código mas ordenado y limpio.
*/

export function calculateISV(products : Product[]): number[] {

    let total = 0;

    products.forEach( ({ price }) => {

        total += price
    })

    return [total,total * 0.21];
}


const items = [ telephone, tablet];

//Aqui desestructuramos la salida del array de la función para imprimirla mas facil por pantalla
//Al igual que hicimos en los ejemplos de desestructuración de arrays en el 05-destructuring-objects-arrays.ts

const [total, isv] = calculateISV(items);

// console.log('Total: ', total );
// console.log('ISV: ', isv);