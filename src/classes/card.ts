import { Color } from "@/enums";
import type { BaseCardInfos, CardMetadata } from "@/types";

export class Card{
    originalName: string;
    colorIdentity: Color;
    convertedManaCost: number;
    color: Color;
    flavorText: string;

    constructor(cardParams: BaseCardInfos){
        this.originalName = cardParams.originalName;
        this.colorIdentity = cardParams.colorIdentity;
        this.convertedManaCost = cardParams.convertedManaCost
    }

    addMetadata(metadata: Partial<CardMetadata>) : void {
        Object.assign(this, metadata);
    }
    
    update(newCardParams: Partial<BaseCardInfos>) : void {
        this.originalName = newCardParams.originalName ?? this.originalName;
        this.colorIdentity = newCardParams.colorIdentity ?? this.colorIdentity;
        this.convertedManaCost = newCardParams.convertedManaCost ?? this.convertedManaCost;
    }

    toString() : string {
        return `${this.originalName} (Converted mana cost : ${this.convertedManaCost})`;
    }
}
