type cardObject = {
    originalName: string;
    localizedNames?: {
        fr?: string,
        de?: string
    };
    price: number;
};

type printSignature = {
    version: string;
    (card: cardObject): void;
};

const greet = (name: string) : string => {
    return `Hello ${name}`;
}

const message: string = greet("World");
console.log(message);

const singleCard: cardObject = {
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

function reprint(anonFunc: printSignature, card: cardObject ){
    anonFunc(card);
}
reprint(printPrice, singleCard);
