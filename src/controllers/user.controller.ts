import { Request, Response, NextFunction } from 'express';
import {  getRepository } from 'typeorm';
import { User } from '../Entity/User';
import boom from '@hapi/boom';
import passport from 'passport';
import { Scope } from '../Entity/Scope';
import bcrypt from 'bcrypt';
import config from '../config/index'
import jwt from 'jsonwebtoken';

export const getUsers = async (
    req: Request,
    res: Response
): Promise<Response> => {
    const users = await getRepository(User).find();
    return res.json(users);
};


export const signup = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { firstnames, lastnames, email, password, confirm_pwd } = req.body;
        let pwd: string = "";
        if (confirm_pwd !== password) {
            throw (boom.badRequest('password doesn\'t match'));
        } else {
            pwd = await bcrypt.hash(password, 10);
        }

        const newUser = getRepository(User).create({ firstnames, lastnames, email: email.toLowerCase(), password: pwd });
        const createdUser = { ...await getRepository(User).save(newUser) };

        return res.json({
            user: { id: createdUser.id, email: createdUser.email, lastnames: createdUser.lastnames, firstnames: createdUser.firstnames, }
        })
    } catch (error) {
        next(error);
    }

}

export const signin = async (req: Request, res: Response, next: NextFunction) => {
    passport.authenticate('basic', (error, user) => {
        if (error || !user)
            return next(error);
        req.login(user, { session: false }, async (errorLogin) => {
            if (errorLogin || !user) {
                return next(errorLogin);
            }

            const scope = await getRepository(Scope).findOne(
                { role: user.isAdmin ? "admin" : "public" });

            if (typeof scope?.token === "undefined")
                return next(boom.unauthorized("public Token not granted"));

            delete user.password;

            const payload = {
                ...user,
                scopes: scope.permissions
            }
            const token = jwt.sign(payload, config.SECRET_JWT!!, {
                expiresIn: "8h"
            });

            return res.json({ token, user });
        })
    })(req, res, next)
}


export const getUser = async (
    req: Request,
    res: Response
): Promise<Response> => {
    const results = await getRepository(User).findOne(req.params.id);
    return res.json(results);
};

export const createUser = async (
    req: Request,
    res: Response
): Promise<Response> => {
    const newUser = getRepository(User).create(req.body);
    const results = await getRepository(User).save(newUser);
    return res.json(results);
};

export const updateUser = async (
    req: Request,
    res: Response
): Promise<Response> => {
    const user = await getRepository(User).findOne(req.params.id);
    if (user) {
        getRepository(User).merge(user, req.body);
        const results = await getRepository(User).save(user);
        return res.json(results);
    }

    return res.json({ msg: 'Not user found' });
};

export const deleteUser = async (req: Request, res: Response): Promise<Response> => {
    const results = await getRepository(User).delete(req.params.id);
    return res.json(results);
};