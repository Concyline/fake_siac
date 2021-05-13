
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { jwtConstants } from './constantes'

export class JwtStrategy extends PassportStrategy(Strategy){

    constructor(){
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: jwtConstants.secret
        })
    }

    async validate(payload: any){
        return {id: payload.sub, email: payload.email}
    }
}