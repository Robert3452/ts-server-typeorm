"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.createUser = exports.getUser = exports.signin = exports.signup = exports.getUsers = void 0;
var typeorm_1 = require("typeorm");
var User_1 = require("../Entity/User");
var boom_1 = __importDefault(require("@hapi/boom"));
var passport_1 = __importDefault(require("passport"));
var Scope_1 = require("../Entity/Scope");
var bcrypt_1 = __importDefault(require("bcrypt"));
var index_1 = __importDefault(require("../config/index"));
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var getUsers = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var users;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, typeorm_1.getRepository(User_1.User).find()];
            case 1:
                users = _a.sent();
                return [2 /*return*/, res.json(users)];
        }
    });
}); };
exports.getUsers = getUsers;
var signup = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, firstnames, lastnames, email, password, confirm_pwd, pwd, newUser, results, error_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 5, , 6]);
                _a = req.body, firstnames = _a.firstnames, lastnames = _a.lastnames, email = _a.email, password = _a.password, confirm_pwd = _a.confirm_pwd;
                pwd = "";
                if (!(confirm_pwd !== password)) return [3 /*break*/, 1];
                throw (boom_1.default.badRequest('password doesn\'t match'));
            case 1: return [4 /*yield*/, bcrypt_1.default.hash(password, 10)];
            case 2:
                pwd = _b.sent();
                _b.label = 3;
            case 3:
                newUser = typeorm_1.getRepository(User_1.User).create({ firstnames: firstnames, lastnames: lastnames, email: email.toLowerCase(), password: pwd });
                return [4 /*yield*/, typeorm_1.getRepository(User_1.User).save(newUser)];
            case 4:
                results = _b.sent();
                return [2 /*return*/, res.json({
                        user: newUser
                    })];
            case 5:
                error_1 = _b.sent();
                next(error_1);
                return [3 /*break*/, 6];
            case 6: return [2 /*return*/];
        }
    });
}); };
exports.signup = signup;
var signin = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        passport_1.default.authenticate('basic', function (error, user) {
            if (error || !user)
                return next(error);
            req.login(user, { session: false }, function (errorLogin) { return __awaiter(void 0, void 0, void 0, function () {
                var scope, payload, token;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (errorLogin || !user) {
                                return [2 /*return*/, next(errorLogin)];
                            }
                            return [4 /*yield*/, typeorm_1.getRepository(Scope_1.Scope).findOne({ role: user.isAdmin ? "admin" : "public" })];
                        case 1:
                            scope = _a.sent();
                            console.log(scope);
                            if (typeof (scope === null || scope === void 0 ? void 0 : scope.token) === "undefined")
                                return [2 /*return*/, next(boom_1.default.unauthorized("public Token not granted"))];
                            console.log(user);
                            payload = __assign(__assign({}, user), { scopes: scope.permissions });
                            token = jsonwebtoken_1.default.sign(payload, index_1.default.SECRET_JWT, {
                                expiresIn: "8h"
                            });
                            return [2 /*return*/, res.json({ token: token, user: user })];
                    }
                });
            }); });
        })(req, res, next);
        return [2 /*return*/];
    });
}); };
exports.signin = signin;
// export const getUsers = async (req: Request, res: Response, next: NextFunction) => {
//     try {
//         const userToken: any = req.user;
//         let users = await userCrud.getAll();
//         users = users.filter((el: any) => el._id.toString() !== userToken._id.toString())
//         return res.json({ statusCode: 200, message: users });
//     } catch (error) {
//         next(error);
//     }
// }
var getUser = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var results;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, typeorm_1.getRepository(User_1.User).findOne(req.params.id)];
            case 1:
                results = _a.sent();
                return [2 /*return*/, res.json(results)];
        }
    });
}); };
exports.getUser = getUser;
var createUser = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var newUser, results;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                newUser = typeorm_1.getRepository(User_1.User).create(req.body);
                return [4 /*yield*/, typeorm_1.getRepository(User_1.User).save(newUser)];
            case 1:
                results = _a.sent();
                return [2 /*return*/, res.json(results)];
        }
    });
}); };
exports.createUser = createUser;
var updateUser = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var user, results;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, typeorm_1.getRepository(User_1.User).findOne(req.params.id)];
            case 1:
                user = _a.sent();
                if (!user) return [3 /*break*/, 3];
                typeorm_1.getRepository(User_1.User).merge(user, req.body);
                return [4 /*yield*/, typeorm_1.getRepository(User_1.User).save(user)];
            case 2:
                results = _a.sent();
                return [2 /*return*/, res.json(results)];
            case 3: return [2 /*return*/, res.json({ msg: 'Not user found' })];
        }
    });
}); };
exports.updateUser = updateUser;
var deleteUser = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var results;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, typeorm_1.getRepository(User_1.User).delete(req.params.id)];
            case 1:
                results = _a.sent();
                return [2 /*return*/, res.json(results)];
        }
    });
}); };
exports.deleteUser = deleteUser;
