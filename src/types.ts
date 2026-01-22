import { Color } from "./enums"

export type DescriptionMetadata = {
    [key: string]: string | number | null
}
export type BaseCardInfos = {
    originalName: string,
    colorIdentity: Color,
    convertedManaCost: number
}