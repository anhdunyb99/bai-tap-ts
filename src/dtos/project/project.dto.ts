import { IsString , IsDate , MinLength , MaxLength , IsNotEmpty } from 'class-validator'


export class ProjectDto {
    @IsString()
    @MinLength(10)
    @MaxLength(50)
    name!: string;

    @IsString()
    @MinLength(2)
    @MaxLength(10)
    slug!: string;
    
    @IsNotEmpty()
    start_date!: Date;

    @IsNotEmpty()
    end_date!: Date
}