import {
  IsEmail,
  MinLength,
  IsNotEmpty,
  IsAlphanumeric,
  IsAlpha,
} from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsAlphanumeric()
  username: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @MinLength(5)
  password: string;

  @IsNotEmpty()
  @IsAlpha()
  schooling: string;
}
