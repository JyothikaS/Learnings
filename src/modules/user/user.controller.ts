/* eslint-disable prettier/prettier */
import { Body, Controller, Post, UsePipes, ValidationPipe, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { UserRegisterDto } from './dto/user-register.dto';
import { User } from 'src/entities/user.entity';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post('/register')
    @UsePipes(ValidationPipe)
    async userRegistration( @Body() userRegister: UserRegisterDto): Promise<User>{
        console.log(userRegister);
        return await this.userService.userRegistration(userRegister);
    }

    @Get('allusers')
    async getAllUsers(): Promise<{ name: string; email: string }[]> {
        return this.userService.getAllUsers();
    }
}
