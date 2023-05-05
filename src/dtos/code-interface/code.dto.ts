import { IsNotEmpty, IsEmail , IsString , IsBoolean , MaxLength , MinLength } from 'class-validator';
export class CodeDto {
    @IsString()
    @MinLength(2)
    @MaxLength(10)
    code!: string;

    @IsBoolean()
    status!: boolean
  }
