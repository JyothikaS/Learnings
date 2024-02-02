/* eslint-disable prettier/prettier */
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: 'asdasdsdacas1212'  //same as the secret key in authModule, name should be secretOrKey
        });
    }

    async validate(payload: any) {
        console.log('payload',payload)
        return {
          id: payload.sub,
          name: payload.name,
        //   tenant: 'jyothi',
        };
    }

}
