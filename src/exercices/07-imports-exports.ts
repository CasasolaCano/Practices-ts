import { calculateISV, Product } from "./06-destructuring-arguments";





const shoppingCart: Product[] = [ 
    {
        desc: 'Telefono 1',
        price: 100
    },

    {
        desc: 'Telefono 2',
        price: 150
    },
];

const [total, isv] = calculateISV( shoppingCart);

console.log('Total', total);
console.log('ISV', isv);