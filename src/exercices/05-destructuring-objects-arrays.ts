
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






//Desestructuración de arrays

const rockAlbums: string[] = ['OK Computer', 'In the court of the Crimson King', 'Close To The Edge'];


/*
    En la desestructuración de arrays lo importante es la posición del nombre.
    Se le ponen nombres a las constantes basadas en su posición.
*/


const [album1, album2, album3 ] = rockAlbums;

// Si no queremos desestructurar las primeras posiciones las tenemos que escribir vacias como en el siguiente ejemplo.
// Esta desestructuración de arrays saltando algunas posiciones no suele ser común pero puede hacerse.

// const [ , , album3] = rockAlbums;

console.log('Album 1: ', album1);
console.log('Album 2: ', album2);
console.log('Album 3: ', album3);