import { Card } from "@/classes/card";
import { CardList } from "@/classes/cardlist";
import { PlaneswalkerCard } from "@/classes/planeswalkercard";
import { Color } from "@/enums";

import type * as types from "@/types";

test("CardList should be accessible at any point", () => {
    expect(CardList.get()).toBeTruthy();
})

test("CardList.add should work", () => {
    const card: Card = new Card({
        originalName: "Emptiness",
        colorIdentity: Color.White | Color.Black,
        convertedManaCost: 6
    })
    CardList.add(card);

    expect(CardList.get().current.length).toBe(1);

    const planeswalkerCard = new PlaneswalkerCard({
        originalName: "The Royal Scions",
        colorIdentity: Color.Blue | Color.Red,
        convertedManaCost: 3
    },
    {
        startingLoyalty: 5
    });
    CardList.add(planeswalkerCard);
    expect(CardList.get().current.length).toBe(2);
})
