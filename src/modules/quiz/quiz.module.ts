import { Module } from '@nestjs/common';
import { QuizController } from './quiz.controller';
import { QuizService } from './quiz.service';
import { Quiz } from 'src/entities/quiz.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Question } from 'src/entities/question.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Quiz, Question])], //Quiz entity called
  controllers: [QuizController],
  providers: [QuizService],
})
export class QuizModule {}
