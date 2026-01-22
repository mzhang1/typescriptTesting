import { Color } from "@/enums";
import type { BaseCardInfos } from "@/types";

export class Card{
    readonly originalName: string;
    readonly colorIdentity: Color;
    readonly convertedManaCost: number;

    constructor(cardParams: BaseCardInfos){
        this.originalName = cardParams.originalName;
        this.colorIdentity = cardParams.colorIdentity;
        this.convertedManaCost = cardParams.convertedManaCost
    }
}
