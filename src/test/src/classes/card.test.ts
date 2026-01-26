import { Card } from "@/classes/card";
import { Color } from "@/enums";

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
