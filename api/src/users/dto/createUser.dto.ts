import { IsEmail, MinLength } from 'class-validator';

export class CreateUserDto {
  username: string;

  @IsEmail()
  email: string;

  @MinLength(5)
  password: string;

  schooling: string;
}
