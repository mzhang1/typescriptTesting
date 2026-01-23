import { Card } from "@/classes/card";

export class CardList{
    current: Card[] = [];

    get(): Card[] {
        return this.current;
    }

    add(newCard: Card) : void {
        this.current.push(newCard);
    }
}
