import { updateAsExpression } from "typescript";

/*
No es comun ver objetos anidados dentro de una interface, es muy facil 
que el programa crezca en complejidad y dentro de ese objeto haya otro objeto...
Lo más comun es crear tantas interfaces como nos hagan falta
*/

interface SuperHeroe {
    name: string;
    age: number;
    // address: {
    //     street:string,
    //     country:string,
    //     city:string
    // };
    address:Address;
    showAddress: () => void;
}
//Crearemos tantas interfaces como necesitemos, asi tendremos el código mas ordenado
//y será mas facil leerlo y crear una documentación a partir de aquí

interface Address {
    street:string;
    country:string;
    city:string;
}

const superHeroe: SuperHeroe = {
    name: 'Spiderman',
    age: 30,
    address: {
        street: 'Main St',
        country: 'USA',
        city: 'NY'
    },

    showAddress() {
        return this.name + ', ' + this.address.city + ', ' + this.address.country;
    }
}

const address = superHeroe.showAddress();
console.log(address);