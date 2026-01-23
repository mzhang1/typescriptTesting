import { Card } from "@/classes/card";

export class CardList{
    current: Card[] = [];

    get(): Card[] {
        return this.current;
    }
}
