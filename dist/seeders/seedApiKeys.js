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
exports.seedApiKeys = void 0;
const dotenv_1 = require("dotenv");
dotenv_1.config();
const crypto_js_1 = __importDefault(require("crypto-js"));
const typeorm_1 = require("typeorm");
const Scope_1 = require("../Entity/Scope");
const Permission_1 = require("../Entity/Permission");
const dropData = (entity) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield typeorm_1.getRepository(entity)
            .createQueryBuilder()
            .delete()
            .execute();
        console.log(`Removing old scopes, result: ${result}`);
    }
    catch (error) {
        console.log(error);
    }
});
const adminScopes = [
    "signin:auth",
    "signup:auth",
    "read:users",
    "read:products",
    "read:stats",
    "create:products",
    "create:users",
    "delete:users",
];
const publicScopes = ["signin:auth", "signup:auth", "read:products"];
function genereateRandomToken() {
    return crypto_js_1.default.lib.WordArray.random(32).toString();
}
const apiKeys = [
    {
        val: "admin",
        token: genereateRandomToken(),
        scopes: adminScopes,
    },
    {
        val: "public",
        token: genereateRandomToken(),
        scopes: publicScopes,
    },
];
function seedApiKeys() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield dropData(Scope_1.Scope);
            const promises = apiKeys.map((apiKey) => __awaiter(this, void 0, void 0, function* () {
                const permissionRepo = apiKey.scopes.map((scope) => __awaiter(this, void 0, void 0, function* () {
                    const repo = typeorm_1.getRepository(Permission_1.Permission).create({ permission: scope });
                    return typeorm_1.getRepository(Permission_1.Permission).save(repo);
                }));
                const scope = typeorm_1.getRepository(Scope_1.Scope).create({
                    token: apiKey.token,
                    role: apiKey.val,
                    permissions: yield Promise.all(permissionRepo),
                });
                return typeorm_1.getRepository(Scope_1.Scope).save(scope);
            }));
            yield Promise.all(promises);
        }
        catch (error) {
            console.log(error);
        }
    });
}
exports.seedApiKeys = seedApiKeys;
