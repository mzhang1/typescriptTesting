import { Color } from "@/enums";
import type { BaseCardInfos } from "@/types";

export class Card{
    originalName: string;
    colorIdentity: Color;
    convertedManaCost: number;

    constructor(cardParams: BaseCardInfos){
        this.originalName = cardParams.originalName;
        this.colorIdentity = cardParams.colorIdentity;
        this.convertedManaCost = cardParams.convertedManaCost
    }
    
    update(newCardParams: Partial<BaseCardInfos>) : void {
        this.originalName = newCardParams.originalName ?? this.originalName;
        this.colorIdentity = newCardParams.colorIdentity ?? this.colorIdentity;
        this.convertedManaCost = newCardParams.convertedManaCost ?? this.convertedManaCost;
    }
}
