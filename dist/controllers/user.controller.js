"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.createUser = exports.getUser = exports.signin = exports.signup = exports.getUsers = void 0;
const typeorm_1 = require("typeorm");
const User_1 = require("../Entity/User");
const boom_1 = __importDefault(require("@hapi/boom"));
const passport_1 = __importDefault(require("passport"));
const Scope_1 = require("../Entity/Scope");
const bcrypt_1 = __importDefault(require("bcrypt"));
const index_1 = __importDefault(require("../config/index"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield typeorm_1.getRepository(User_1.User).find();
    return res.json(users);
});
exports.getUsers = getUsers;
const signup = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { firstnames, lastnames, email, password, confirm_pwd } = req.body;
        let pwd = "";
        if (confirm_pwd !== password) {
            throw (boom_1.default.badRequest('password doesn\'t match'));
        }
        else {
            pwd = yield bcrypt_1.default.hash(password, 10);
        }
        const newUser = typeorm_1.getRepository(User_1.User).create({ firstnames, lastnames, email: email.toLowerCase(), password: pwd });
        const createdUser = Object.assign({}, yield typeorm_1.getRepository(User_1.User).save(newUser));
        return res.json({
            user: { id: createdUser.id, email: createdUser.email, lastnames: createdUser.lastnames, firstnames: createdUser.firstnames, }
        });
    }
    catch (error) {
        next(error);
    }
});
exports.signup = signup;
const signin = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    passport_1.default.authenticate('basic', (error, user) => {
        if (error || !user)
            return next(error);
        req.login(user, { session: false }, (errorLogin) => __awaiter(void 0, void 0, void 0, function* () {
            if (errorLogin || !user) {
                return next(errorLogin);
            }
            const scope = yield typeorm_1.getRepository(Scope_1.Scope).findOne({ role: user.isAdmin ? "admin" : "public" });
            if (typeof (scope === null || scope === void 0 ? void 0 : scope.token) === "undefined")
                return next(boom_1.default.unauthorized("public Token not granted"));
            delete user.password;
            const payload = Object.assign(Object.assign({}, user), { scopes: scope.permissions });
            const token = jsonwebtoken_1.default.sign(payload, index_1.default.SECRET_JWT, {
                expiresIn: "8h"
            });
            return res.json({ token, user });
        }));
    })(req, res, next);
});
exports.signin = signin;
const getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const results = yield typeorm_1.getRepository(User_1.User).findOne(req.params.id);
    return res.json(results);
});
exports.getUser = getUser;
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newUser = typeorm_1.getRepository(User_1.User).create(req.body);
    const results = yield typeorm_1.getRepository(User_1.User).save(newUser);
    return res.json(results);
});
exports.createUser = createUser;
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield typeorm_1.getRepository(User_1.User).findOne(req.params.id);
    if (user) {
        typeorm_1.getRepository(User_1.User).merge(user, req.body);
        const results = yield typeorm_1.getRepository(User_1.User).save(user);
        return res.json(results);
    }
    return res.json({ msg: 'Not user found' });
});
exports.updateUser = updateUser;
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const results = yield typeorm_1.getRepository(User_1.User).delete(req.params.id);
    return res.json(results);
});
exports.deleteUser = deleteUser;
