

function whatTypeIAm<T>(argument: T) {
    return argument;
}

let amString = whatTypeIAm('Hola mundo');
let amNumber = whatTypeIAm(100);
let amArray = whatTypeIAm([1,2,3,4,5,6]);

let amExplicit = whatTypeIAm<number>(1000);

