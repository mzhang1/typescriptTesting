import { Card } from "@/classes/card";
import type * as types from "@/types";

export type CreatureCardInfos = {
    readonly power: string | number,
    readonly toughness: string | number
}
export class CreatureCard extends Card {
    readonly power: string | number;
    readonly toughness: string | number;

    constructor(
        cardParams: types.BaseCardInfos,
        creatureParams: CreatureCardInfos
    ) {
        super(cardParams);
        Object.assign(this, creatureParams);
    }
};
