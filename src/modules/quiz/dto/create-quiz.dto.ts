/* eslint-disable prettier/prettier */
import { IsNotEmpty, Length } from 'class-validator';


export class CreateQuizDto {
  @IsNotEmpty({ message: 'title cant be empty' })
  @Length(3, 255)  //min max
  title: string;

  @Length(4)
  description: string;
}
