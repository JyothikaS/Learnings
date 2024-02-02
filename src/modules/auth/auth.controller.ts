/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { localAuthGuard } from './local-auth.guard';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @UseGuards(localAuthGuard)
    @Post('login')
    async login(@Request() req): Promise<any> {
        console.log('req.user cntrlr', req.body);
        // return req.user;
        console.log(this.authService.generateToken(req.user))
        return this.authService.generateToken(req.user);
    }

    //get current authenticated user
    //pass jwt authguard
    @UseGuards(JwtAuthGuard)
    @Get('user')
    async user(@Request() req): Promise<any> {
        return req.user;
    }

}
