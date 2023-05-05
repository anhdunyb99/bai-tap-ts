import {IsString , IsNotEmpty , IsInt , MinLength , MaxLength} from 'class-validator'
export class StatusDto {
    @IsString()
    @MinLength(4)
    @MaxLength(10)
    name!: string;

    @IsNotEmpty()
    @IsInt()
    order!: number
}