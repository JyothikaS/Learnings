import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Quiz } from 'src/entities/quiz.entity';
import { Repository } from 'typeorm';
import { CreateQuizDto } from './dto/create-quiz.dto';
import { Question } from 'src/entities/question.entity';
import { CreateQuestionDto } from './dto/create-question.dto';

@Injectable()
export class QuizService {
  constructor(
    @InjectRepository(Quiz) private readonly quizRepository: Repository<Quiz>, //inject repository for entity Quiz
    @InjectRepository(Question) //inject repository for entity Question
    private readonly questionRepository: Repository<Question>,
  ) {}

  getAllQuiz() {
    return [1, 2, 3];
  }

  // get quiz
  async getQuizById(id: number) {
    return await this.quizRepository.findOne({
      where: {
        id: id,
      },
      relations: ['questions'], //not only return id we need qns also
    });
  }

  //create quiz
  async createNewQuiz(quiz: CreateQuizDto) {
    return await this.quizRepository.save(quiz);
  }
  //create questions
  async createQuestion(
    question: CreateQuestionDto,
    quiz: Quiz, //added parameter quiz
  ): Promise<Question> {
    //return Promise of type question
    // return await this.questionRepository.save(question);
    //modified above to const newQuestion
    const newQuestion = await this.questionRepository.save({
      question: question.question, // we need only question to be passed not quizid,
    });
    //map quiz with new question
    quiz.questions = [newQuestion, ...quiz.questions]; //we declared questions as an array in quiz entity, keep new & old
    await quiz.save();

    return newQuestion;
  }
}
