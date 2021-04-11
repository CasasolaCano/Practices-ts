

interface Product {
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

function calculateISV(products : Product[]): number[] {

    let total = 0;

    products.forEach( ({ price }) => {

        total += price
    })

    return [total,total * 0.21];
}

const items = [ telephone, tablet];

const [total, isv] = calculateISV(items);

console.log('Total: ', total );
console.log('ISV: ', isv);