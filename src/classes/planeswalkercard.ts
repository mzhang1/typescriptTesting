import { Card } from "@/classes/card"
import type { BaseCardInfos } from "@/types";

export class PlaneswalkerCard extends Card{
    readonly startingLoyalty: number;

    constructor(cardParams: BaseCardInfos, customTypeInfos: {
        startingLoyalty: number
    }){
        super(cardParams);
        this.startingLoyalty = customTypeInfos.startingLoyalty;
    }
}
