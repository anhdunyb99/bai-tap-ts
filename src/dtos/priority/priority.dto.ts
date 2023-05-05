import { IsString , IsInt , IsNotEmpty } from "class-validator"

export class PriorityDto {
    @IsNotEmpty()
    @IsString()
    name!: string;
    
    @IsInt()
    order!: number
}