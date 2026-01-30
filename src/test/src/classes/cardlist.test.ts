import { CardList } from "@/classes/cardlist";
import type * as types from "@/types";

test("CardList should be accessible at any point", () => {
    expect(CardList.get()).toBeTruthy();
})
