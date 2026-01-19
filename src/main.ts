type printSignature = {
    version: string;
    (name: string, price: number): void;
};

const greet = (name: string) : string => {
    return `Hello ${name}`;
}

const message: string = greet("World");
console.log(message);

const cardname: string = "Bébé taupe-blaireau";
const firstprice: number = 47.75;

const printPrice = Object.assign(
    (name: string, price: number) => {
        console.log(`${name}: ${price}€`);
    },
    { version: "1" }
)
printPrice(cardname, firstprice);

function reprint(anonFunc: printSignature, name: string, amount: number ){
    anonFunc(name, amount);
}
reprint(printPrice, cardname, firstprice);
