import { Card } from "@/classes/card";

import type * as types from "@/types";
import type * as cardTypes from "@/types/cardtypes";

export class CreatureCard extends Card {
    readonly power: string | number;
    readonly toughness: string | number;

    constructor(
        cardParams: types.BaseCardInfos,
        creatureParams: cardTypes.CreatureCardInfos
    ) {
        super(cardParams);
        Object.assign(this, creatureParams);
    }
};
