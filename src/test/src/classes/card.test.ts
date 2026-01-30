import { Card } from "@/classes/card";
import { Color } from "@/enums";
import type * as types from "@/types";

test("Card's properties can be updated", () => {
    let testCard: Card = new Card({
        originalName: "Vibrance",
        colorIdentity: Color.Red | Color.Green,
        convertedManaCost: 5
    });

    testCard.update({
        originalName: "Deceit",
        colorIdentity: Color.Blue | Color.Black,
        convertedManaCost: 6
    });

    expect(testCard.originalName).toBe("Deceit");
    expect(testCard.convertedManaCost).toBe(6);
    expect(testCard.colorIdentity).toBe(Color.Black | Color.Blue);
})

test("Card to string method functions normally", () => {
    let testCard: Card = new Card({
        originalName: "Emptiness",
        colorIdentity: Color.Black | Color.White,
        convertedManaCost: 6
    });

    expect(testCard.toString()).toBe("Emptiness (Converted mana cost : 6)");
})

test("Card can receive additional data", () => {
    let wistfullNessCard: Card = new Card({
        originalName: "Wistfullness",
        colorIdentity: Color.Blue | Color.White,
        convertedManaCost: 5
    });

    let additionalData: Partial<types.CardMetadata> = {
        color: Color.Blue | Color.Black
    };

    wistfullNessCard.addMetadata(additionalData);
});
