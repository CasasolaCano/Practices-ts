

// let abilities: (string | number)[] = ['Dash', 'Shield', 'Healing'];      Mala práctica

import { createEmitAndSemanticDiagnosticsBuilderProgram } from "typescript";

//Los arreglos(Arrays) también deben ir con tipado estricto, esto es una buena práctica para no inducirnos a errores futuros

let abilities: string[] = ['Dash', 'Shield', 'Healing'];


// Usamos las interfaces para definir las variables dentro de los objetos y asegurarnos de que typescript sepa que tipo de 
// variables estamos utilizando. Según la documentación de typescript, una interface es una forma de nombrar un tipo objeto
//  https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#interfaces

interface Character {
    nombre: string;
    hp: number;
    abilities: string[];
    home?: string;      // Si no le decimos a la interface que home es opcional, será obligatorio añadirlo en la creación del de mas abajo.
}

const character: Character = {
    nombre: 'strider',
    hp: 100,
    abilities: ['Dash', 'Shield', 'Healing']
}

// Al haber añadido el home de manera opcional (colocando una '?' antes de los dos puntos '?:'), podemos añadir esa variable mas tarde si es necesaria.

character.home = 'Olive Town';      

console.table(character);
