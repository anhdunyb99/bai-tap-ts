import { IsString , IsNotEmpty , MinLength , MaxLength } from "class-validator"


export class TypeDto {
    @IsString()
    @MinLength(4)
    @MaxLength(10)
    name!: string;

    @IsString()
    @MinLength(4)
    @MaxLength(10)
    color!: string
}

export default interface IUpdateTypes {
    name: string,
    color: string
}

