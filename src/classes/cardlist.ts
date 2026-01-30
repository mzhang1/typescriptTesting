import { Card } from "@/classes/card";

export class CardList{
    static #instance: CardList;
    current: Array<Card>;

    private constructor() {}

    public static get() : CardList {
        if(!CardList.#instance){
            CardList.#instance = new CardList();
            CardList.#instance.current = [];
        }

        return CardList.#instance;
    }

    public static add(newCard: Card) {
        CardList.#instance.current.push(newCard);
    }
}
