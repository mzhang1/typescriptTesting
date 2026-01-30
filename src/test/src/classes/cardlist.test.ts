import { Card } from "@/classes/card";
import { CardList } from "@/classes/cardlist";
import { Color } from "@/enums";

import type * as types from "@/types";

test("CardList should be accessible at any point", () => {
    expect(CardList.get()).toBeTruthy();
})

test("CardList.add should work", () => {
    expect(CardList.add(new Card({
        originalName: "Emptiness",
        colorIdentity: Color.White | Color.Black,
        convertedManaCost: 6
    }))).not.toThrow(Error);
})
