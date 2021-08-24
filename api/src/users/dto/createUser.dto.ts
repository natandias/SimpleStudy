import { IsEmail } from 'class-validator';

export class CreateUserDto {
  username: string;

  @IsEmail()
  email: string;

  password: string;
  schooling: string;
}
