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
console.log(printPrice(cardname, firstprice));
