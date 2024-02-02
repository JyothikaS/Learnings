/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { UserRegisterDto } from './dto/user-register.dto';
import { User } from 'src/entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
// import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
    constructor( @InjectRepository(User) private readonly userRepository: Repository<User>) {}
    async getAllUsers(): Promise<{ name: string; email: string }[]> {
        const users = await this.userRepository.find({
          select: ['name', 'email'],
        });
    
        return users.map(({ name, email }) => ({ name, email }));
    }

    async userRegistration(userRegister: UserRegisterDto): Promise<User> {
        // const salt = await bcrypt.genSalt();
        // const password = await bcrypt.hash(userRegister.password, salt);

        const user = new User();
        user.name = userRegister.name;
        user.email = userRegister.email;
        // user.password = password;
        user.password = userRegister.password;

    return await user.save();
    }

    //get user by email
    async getUserByEmail(email: string): Promise<User | undefined> {
        // console.log('user',User.findOne({ where: { email } }))
        return User.findOne({ where: { email } })
    }
}
