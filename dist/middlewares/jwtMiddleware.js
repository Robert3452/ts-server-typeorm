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
const passport_jwt_1 = require("passport-jwt");
const passport_1 = __importDefault(require("passport"));
const config_1 = __importDefault(require("../config"));
const boom_1 = __importDefault(require("@hapi/boom"));
const typeorm_1 = require("typeorm");
const User_1 = require("../Entity/User");
const opts = {
    jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: config_1.default.SECRET_JWT,
};
passport_1.default.use(new passport_jwt_1.Strategy(opts, (payload, done) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userFound = yield typeorm_1.getRepository(User_1.User).findOne({
            where: [
                { email: payload.email }
            ]
        });
        if (!userFound) {
            return done(boom_1.default.unauthorized(), false);
        }
        return done(null, Object.assign(Object.assign({}, userFound), { scopes: payload.scopes }));
    }
    catch (error) {
        done(boom_1.default.unauthorized());
    }
})));
