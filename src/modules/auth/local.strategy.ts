/* eslint-disable prettier/prettier */
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from './auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) { //local strategy used here
    constructor(private authService: AuthService) {
        super();
    }

    //checking if email, pswd correct or not
    async validate(email: string, password: string) {
        const user = await this.authService.validateUserCreds(email, password); //find valid user based on validateUserCreds 
        if (!user) throw new UnauthorizedException('not authorized user');
        // console.log(user);
        return user;
    }
} 
