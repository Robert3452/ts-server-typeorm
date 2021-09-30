"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var config_1 = __importDefault(require("../config"));
typeorm_1.createConnection()
    .then(function (_) { return console.log("Database connected on port " + config_1.default.TYPEORM_PORT); })
    .catch(function (error) { return console.log(error); });
