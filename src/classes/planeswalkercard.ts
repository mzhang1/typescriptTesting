import { Card } from "@/classes/card"
import type { BaseCardInfos } from "@/types";

import type { PlaneswalkerCardInfos } from "@/types/cardtypes"

export class PlaneswalkerCard extends Card{
    readonly startingLoyalty: number;

    constructor(cardParams: BaseCardInfos, customTypeInfos: PlaneswalkerCardInfos){
        super(cardParams);
        this.startingLoyalty = customTypeInfos.startingLoyalty;
    }
}
