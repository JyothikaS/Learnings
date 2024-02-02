/* eslint-disable prettier/prettier */
import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../user/user.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(private userService: UserService, private jwtService: JwtService) {} //to get user

    async validateUserCreds(email: string, password: string):Promise<any>  { //return user as Promise else will show error in local.strategy.ts
        const user = await this.userService.getUserByEmail(email);

        if(!user) throw new BadRequestException(); //if user does not exist
        console.log('bcrypt ', await bcrypt.compare(password, user.password));
        console.log('password- ',password)
        console.log('user.password', user.password)
        if(!(await bcrypt.compare(password, user.password)))
       
        throw new UnauthorizedException('not authorized user!'); //if password doest match raise exception
    
    return user;
    
    }
    //fn for token generation
    async generateToken(user: any) {
        return {
            access_token: this.jwtService.sign({ //signs the payload with jwt service
            name: user.name,
            sub: user.id, //in jwt token user id is declared as 'sub'
            }),
        };
    }
}
