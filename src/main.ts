const greet = (name: string) : string => {
    return `Hello ${name}`;
}

const message: string = greet("World");
console.log(message);

const cardname: string = "Bébé taupe-blaireau";
const firstprice: number = 47.75;

const printPrice = (name: string, price: number) => {
    console.log(`${name}: ${price}€`);
}
printPrice(cardname, firstprice);

function reprint(anonFunc: (name: string, price: number) => void, name: string, amount: number ){
    anonFunc(name, amount);
}
reprint(printPrice, cardname, firstprice);
