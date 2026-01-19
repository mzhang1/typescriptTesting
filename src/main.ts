type cardObject = {
    readonly originalName: string;
    readonly localizedNames?: {
        fr?: string,
        de?: string
    };
    price: number;
};

//First step : Basic greeting call
type printSignature = {
    version: string;
    (card: cardObject): void;
};

const greet = (name: string) : string => {
    return `Hello ${name}`;
}

const message: string = greet("World");
console.log(message);

//Second step : printing pre-defined object pattern
let singleCard: cardObject = {
    originalName: "Bébé taupe-blaireau",
    price: 47.75
};

const printPrice = Object.assign(
    (card: cardObject) => {
        console.log(`${card.originalName}: ${card.price}€`);
    },
    { version: "1" }
)
printPrice(singleCard);

//Third step: Using function object as parameter with function signature type
function reprint(anonFunc: printSignature, card: cardObject ){
    anonFunc(card);
}
reprint(printPrice, singleCard);
