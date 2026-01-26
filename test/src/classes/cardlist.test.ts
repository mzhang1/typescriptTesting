import { CardList } from "@/classes/cardlist";

test("CardList should be accessible at any point", () => {
    expect(CardList.get()).toBe({});
})
