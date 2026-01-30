import { Color } from "./enums"

export type DescriptionMetadata = {
    [key: string]: string | number | null
}
export type BaseCardInfos = {
    originalName: string,
    colorIdentity: Color,
    convertedManaCost: number
}

export type CardDescription = {
    originalName: string,
    color: Color,
    colorIdentity: Color,
    flavorText: string
};

export type CardMetadata = Omit<CardDescription,keyof BaseCardInfos>;