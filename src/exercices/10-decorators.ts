

function classDecorator<T extends { new (...args: any[]): {} }> (
    constructor: T
    ) {
        return class extends constructor {
            newProperty = "new Property";
            hello = "ovverride";
        };
    }


@classDecorator
class SuperClass {

    public property:string = 'ABC123';

    print() {
        console.log('Hola mundo');
    }
}

console.log(SuperClass);

const miClase = new SuperClass();

console.log(miClase.property);