import { BasicStrategy } from 'passport-http'
import passport from 'passport';
import boom from '@hapi/boom'
import { User } from '../Entity/User';
import { getRepository } from 'typeorm';
import bcrypt from 'bcrypt';

passport.use('basic', new BasicStrategy(async (email, password, done) => {

    try {
        const userFound = await getRepository(User).findOne({
            where: [
                { email }
            ]
        })
        if (!userFound) return done(boom.unauthorized(), false);
        const signedIn: boolean = await bcrypt.compare(password, userFound.password);
        if (signedIn)
            return done(null, userFound);
        return done(boom.unauthorized(), false);

    } catch (error) {
        console.log(error)
        if (typeof error === "string") {
            return done(boom.unauthorized(error));
        }
    }
}))