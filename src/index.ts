
interface Player {

    volume: number;
    second: number;
    song: string;
    details:Details;
}

interface Details {
    author: string;
    year: number;
}

const player: Player = {
    volume: 90,
    second: 30,
    song: 'Mess around',
    details: {
        author: 'Cage the Elephant',
        year: 2015
    }
}

/*
    Podemos desestructurar los objetos, esto nos deja un código mas limpio y ordenado,
    tenemos varias maneras de desestructurar un objeto dentro de otro,
    el siguiente ejemplo puede ser algo complicado de entender cuando tenemos mucho
    código escrito.
*/

const {volume, second, song, details:{author} } = player;

//Este ejemplo comentado aqui abajo sería la manera correcta para mantener el código lo mas limpio posible.

// const { author } = details;

console.log('El volumen actual es de: ', volume);
console.log('El segundo actual es de: ', second);
console.log('La cancion actual es de: ', song);
console.log('El autor actual es: ', author);