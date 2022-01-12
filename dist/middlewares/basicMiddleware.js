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
const passport_http_1 = require("passport-http");
const passport_1 = __importDefault(require("passport"));
const boom_1 = __importDefault(require("@hapi/boom"));
const User_1 = require("../Entity/User");
const typeorm_1 = require("typeorm");
const bcrypt_1 = __importDefault(require("bcrypt"));
passport_1.default.use('basic', new passport_http_1.BasicStrategy((email, password, done) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userFound = yield typeorm_1.getRepository(User_1.User).findOne({
            where: [
                { email }
            ],
            // select: ["firstnames", "lastnames", "isAdmin", "email", "id",]
        });
        if (!userFound)
            return done(boom_1.default.unauthorized(), false);
        const signedIn = yield bcrypt_1.default.compare(password, userFound.password);
        if (signedIn)
            return done(null, userFound);
        return done(boom_1.default.unauthorized(), false);
    }
    catch (error) {
        console.log(error);
        if (typeof error === "string") {
            return done(boom_1.default.unauthorized(error));
        }
    }
})));
