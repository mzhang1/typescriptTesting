import defaultFunction from '@/conditionalTest';

defaultFunction();

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
    (card: cardObject) : void => {
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

//Sixth step : Using generics, the type will be determined upon running the function
type genericFunctionType = <T>(arg: T) => T;
const genericFunctionReturn: genericFunctionType = <T>(arg: T) => {
    console.log(typeof arg);
    return arg;
};
console.log(genericFunctionReturn("String type"));
console.log(genericFunctionReturn(244));
console.log(genericFunctionReturn(null));
console.log(genericFunctionReturn(singleUnsetCard));

//Seventh step : Using generics with supertype
function loggingIdentity<T>(arg: Array<T>): Array<T> {
    console.log(arg.length);
    return arg;
}
console.log(loggingIdentity([1,4,7,11,14]));
console.log(loggingIdentity(["251",252,255,"260",null,NaN]));

enum Color {
    White,
    Blue,
    Black,
    Red,
    Green
};

type BaseCardInfos = {
    originalName: string,
    colorIdentity: Color,
    convertedManaCost: number
}

//Eighth step : Using classes with enums
class Card{
    readonly originalName: string;
    readonly colorIdentity: Color;
    readonly convertedManaCost: number;

    constructor(cardParams: BaseCardInfos){
        this.originalName = cardParams.originalName;
        this.colorIdentity = cardParams.colorIdentity;
        this.convertedManaCost = cardParams.convertedManaCost
    }
}

class PlaneswalkerCard extends Card{
    readonly startingLoyalty: number;

    constructor(cardParams: BaseCardInfos, customTypeInfos: {
        startingLoyalty: number
    }){
        super(cardParams);
        this.startingLoyalty = customTypeInfos.startingLoyalty;
    }
}

//Nineth step : Generic class
class GenericNumber<NumType> {
    current: NumType;
    zeroValue: NumType;
    add: (x: NumType, y: NumType) => NumType;
    addToCurrent: (x: NumType) => void;
}
let myGenericNumber = new GenericNumber<number>();
myGenericNumber.current = 0;
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function(x: number, y: number){
    return x + y;
};
myGenericNumber.addToCurrent = function(x: number): void {
    this.current += x;
}
myGenericNumber.addToCurrent(252);
myGenericNumber.addToCurrent(6);
console.log(myGenericNumber.current);

//Tenth step : Generic types extension
function printCardName<T extends Card>(card: T) : string
{
    return card.originalName;
}
const firstCard = new PlaneswalkerCard({
    originalName: "The Royal Scions",
    convertedManaCost: 3,
    colorIdentity: Color.Blue | Color.Red
}, {
    startingLoyalty: 4
});
const secondCard = new Card({
    originalName: "Omnath, Locust of the Roil",
    convertedManaCost: 4,
    colorIdentity: Color.Blue | Color.Red | Color.Green
});
console.log(printCardName(firstCard));
console.log(printCardName(secondCard));

//Eleventh step : Multiple angle brackets parameters and generic Key usage
//We can declare placeholders before the argument list
let getCardProperty = function<T extends Card, K extends keyof T>(card: T, targetKey: K) {
    return card[targetKey];
};
console.log(getCardProperty(firstCard, "originalName"));
console.log(getCardProperty(firstCard, "startingLoyalty"));
console.log(getCardProperty(firstCard, "colorIdentity"));

console.log(getCardProperty(secondCard, "convertedManaCost"));

const cards: Card[] = [
    firstCard,
    secondCard
]
cards.map(function<K, V extends Card>(card: V, key: K) : void {
    console.log(`Index ${key} : ${card.originalName}`);
});

//Tenth step : Using return type utility type (This can only be used as type and takes only types as angle bracket argument)
type printReturnType = ReturnType<typeof printCardName>
const printed: printReturnType = "Nostalgie";
console.log("Printed card name : " + printed);

//Eleventh step : Conditionnal object type
type DescriptionMetadata = {
    [key: string]: string | number | null
}