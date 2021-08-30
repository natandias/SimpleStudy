import { IsUUID, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateSchoolYearDto {
  @IsNotEmpty()
  @IsUUID()
  userId: string;

  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @IsNumber()
  periodsAmount: number;
}
