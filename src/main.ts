interface cardObject
{
    originalName: string,
    localizedNames?: {
        fr?: string,
        de?: string
    },
    price: number;
};

interface unsetCard extends cardObject
{
    isSanctionnedLegal: boolean
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

//Fourth step: Union types
const mixedType: string | number = 58.99;
console.log(mixedType);

//Fifth step : Using interface
const singleUnsetCard: unsetCard = {
    originalName: "Comet, Stellar pup",
    price: 9.74,
    isSanctionnedLegal: true
};
reprint(printPrice, singleUnsetCard)

//Sixth step : Using generics
type genericFunctionType = <T>(arg: T) => T;
const genericFunctionReturn: genericFunctionType = <T>(arg: T) => {
    console.log(typeof arg);
    return arg;
};
console.log(genericFunctionReturn("String type"));
console.log(genericFunctionReturn(244));
console.log(genericFunctionReturn(null));
console.log(genericFunctionReturn(singleUnsetCard));
