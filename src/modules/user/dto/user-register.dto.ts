/* eslint-disable prettier/prettier */
import { IsEmail, IsNotEmpty, Length } from 'class-validator';


export class UserRegisterDto {
  @IsNotEmpty({ message: 'Name should not be empty' })
  name: string;

  @IsNotEmpty()
  @IsEmail({},{message: 'Invalid email format'})
  email: string;

  @IsNotEmpty()
  @Length(4, 24)
//   @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {message: 'password too weak'})
  password: string;
}
