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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = exports.wrapErrors = exports.logErrors = void 0;
var boom_1 = __importDefault(require("@hapi/boom"));
var config_1 = __importDefault(require("../config"));
function withErrorStack(error, stack) {
    if (config_1.default.DEV === "development")
        return __assign(__assign({}, error), { stack: stack });
    return error;
}
function logErrors(err, req, res, next) {
    console.log(err);
    return next(err);
}
exports.logErrors = logErrors;
function wrapErrors(err, req, res, next) {
    if (!err.isBoom) {
        return next(boom_1.default.badImplementation(err));
    }
    return next(err);
}
exports.wrapErrors = wrapErrors;
function errorHandler(err, req, res, next) {
    var _a = err.output, statusCode = _a.statusCode, payload = _a.payload;
    return res.status(statusCode).json(withErrorStack(payload, err.stack));
}
exports.errorHandler = errorHandler;
