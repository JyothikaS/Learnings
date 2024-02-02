/* eslint-disable prettier/prettier */
import { IsNotEmpty, Length } from 'class-validator';

export class CreateQuestionDto {
  @IsNotEmpty()
  @Length(3, 255) //min max
  question: string;

  @IsNotEmpty()
  quizId: number; //name from entity

}
