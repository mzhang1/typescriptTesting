import { Card } from "@/classes/card";

export class CardList{
    static #instance: CardList;

    private constructor() {}

    public static get() : CardList {
        if(!CardList.#instance){
            CardList.#instance = new CardList();
        }

        return CardList.#instance;
    }
}
