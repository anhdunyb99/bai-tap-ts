import { IsString , IsInt , MinLength , MaxLength , IsNotEmpty} from 'class-validator'

export class TaskDto {
    @IsInt()
    @IsNotEmpty()
    userId!: number;

    @IsInt()
    @IsNotEmpty()
    projectId!: number;

    @IsInt()
    @IsNotEmpty()
    typeId!: number;

    @IsInt()
    @IsNotEmpty()
    priorityId!: number;

    @IsInt()
    @IsNotEmpty()
    statusId!: number;

    @IsString()
    @MinLength(10)
    @MaxLength(50)
    name!: string;

    @IsInt()
    @IsNotEmpty()
    order!: number;

    @IsNotEmpty()
    start_date!: Date;

    @IsNotEmpty()
    end_date!: Date;

    @IsNotEmpty()
    assignee!: string
}