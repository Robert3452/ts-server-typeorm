import { Strategy, ExtractJwt, StrategyOptions } from 'passport-jwt'
import passport from 'passport';
import config from '../config'
import boom from '@hapi/boom';
import { getRepository } from 'typeorm';
import { User } from '../Entity/User';

const opts: StrategyOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: config.SECRET_JWT,
}

passport.use(new Strategy(opts, async (payload, done) => {
    try {
        const userFound = await getRepository(User).findOne({
            where: [
                { email: payload.email }
            ]
        })
        if (!userFound) {
            return done(boom.unauthorized(), false);
        }
        return done(null, { ...userFound, scopes: payload.scopes });

    } catch (error) {
        done(boom.unauthorized());
    }
}));