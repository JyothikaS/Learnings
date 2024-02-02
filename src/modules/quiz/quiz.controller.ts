/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { QuizService } from "./quiz.service";
import { CreateQuizDto } from "./dto/create-quiz.dto";
import { CreateQuestionDto } from "./dto/create-question.dto";
import { Question } from "src/entities/question.entity";

@Controller('quiz')
export class QuizController {
    constructor(private readonly quizService: QuizService) {}

    @Get()//by default '/' i.e., same if nothings given
    getAllQuiz() {
        // return [1, 2, 2]
        return this.quizService.getAllQuiz();
    }
// create sample quiz data
    @Post('/create')
    @UsePipes(ValidationPipe)//need to pass dto through pipe, pipes are executed on req's
                             //need to install class-transformer for ValidationPipe to work
    async createQuiz(@Body() quizData: CreateQuizDto) {   //@Body-to access the parameter or req body
                                                    //for quizData 'CreateQuizDto' is given as type for validation 
    // return { data: quizData};
    return await this.quizService.createNewQuiz(quizData);
    }

    // create questions
    @Post('question')
    @UsePipes(ValidationPipe)
    async saveQuestion(@Body() question: CreateQuestionDto): Promise<Question> {   //async bcoz we call an async from service
        // return question;
        const quiz = await this.quizService.getQuizById(question.quizId); //and send it in below createQuestion(question,---)
        return await this.quizService.createQuestion(question, quiz); //create question return a promise so give promise, it will work without promise also
    }
}
