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
exports.seedApiKeys = void 0;
var dotenv_1 = require("dotenv");
dotenv_1.config();
var crypto_js_1 = __importDefault(require("crypto-js"));
var typeorm_1 = require("typeorm");
var Scope_1 = require("../Entity/Scope");
var Permission_1 = require("../Entity/Permission");
var dropData = function (entity) { return __awaiter(void 0, void 0, void 0, function () {
    var result, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, typeorm_1.getRepository(entity)
                        .createQueryBuilder()
                        .delete()
                        .execute()];
            case 1:
                result = _a.sent();
                console.log("Removing old scopes, result: " + result);
                return [3 /*break*/, 3];
            case 2:
                error_1 = _a.sent();
                console.log(error_1);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
var adminScopes = [
    'signin:auth',
    'signup:auth',
    'read:users',
    'read:products',
    'read:stats',
    'create:products',
    'create:users',
    'delete:users'
];
var publicScopes = [
    'signin:auth',
    'signup:auth',
    'read:products'
];
function genereateRandomToken() {
    return crypto_js_1.default.lib.WordArray.random(32).toString();
}
var apiKeys = [
    {
        val: "admin",
        token: genereateRandomToken(),
        scopes: adminScopes
    }, {
        val: "public",
        token: genereateRandomToken(),
        scopes: publicScopes
    }
];
function seedApiKeys() {
    return __awaiter(this, void 0, void 0, function () {
        var promises, error_2;
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, dropData(Scope_1.Scope)];
                case 1:
                    _a.sent();
                    promises = apiKeys.map(function (apiKey) { return __awaiter(_this, void 0, void 0, function () {
                        var permissionRepo, scope, _a, _b;
                        var _c;
                        var _this = this;
                        return __generator(this, function (_d) {
                            switch (_d.label) {
                                case 0:
                                    permissionRepo = apiKey.scopes.map(function (scope) { return __awaiter(_this, void 0, void 0, function () {
                                        var repo;
                                        return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0:
                                                    repo = typeorm_1.getRepository(Permission_1.Permission).create({ permission: scope });
                                                    return [4 /*yield*/, typeorm_1.getRepository(Permission_1.Permission).save(repo)];
                                                case 1: return [2 /*return*/, _a.sent()];
                                            }
                                        });
                                    }); });
                                    _b = (_a = typeorm_1.getRepository(Scope_1.Scope)).create;
                                    _c = {
                                        token: apiKey.token,
                                        role: apiKey.val
                                    };
                                    return [4 /*yield*/, Promise.all(permissionRepo)];
                                case 1:
                                    scope = _b.apply(_a, [(_c.permissions = _d.sent(),
                                            _c)]);
                                    return [4 /*yield*/, typeorm_1.getRepository(Scope_1.Scope).save(scope)];
                                case 2: return [2 /*return*/, _d.sent()];
                            }
                        });
                    }); });
                    return [4 /*yield*/, Promise.all(promises)];
                case 2:
                    _a.sent();
                    return [3 /*break*/, 4];
                case 3:
                    error_2 = _a.sent();
                    console.log(error_2);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.seedApiKeys = seedApiKeys;
// seedApiKeys();
