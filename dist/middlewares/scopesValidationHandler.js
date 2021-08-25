"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var boom_1 = __importDefault(require("@hapi/boom"));
var scopesValidationHandler = function (allowedScopes) {
    return function (req, res, next) {
        var tokenData = req.user;
        if (!tokenData || (!tokenData.scopes && !tokenData))
            next(boom_1.default.unauthorized('Missing scopes'));
        var hasAccess = allowedScopes
            .map(function (allowedScope) { return tokenData.scopes.includes(allowedScope); })
            .find(function (allowed) { return Boolean(allowed); });
        if (hasAccess)
            next();
        else
            next(boom_1.default.unauthorized('Insuficient scopes'));
    };
};
exports.default = scopesValidationHandler;
