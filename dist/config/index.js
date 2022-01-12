"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const config = {
    PORT: process.env.PORT,
    DEV: process.env.ENVIRONMENT,
    TYPEORM_PORT: process.env.TYPEORM_PORT,
    SECRET_JWT: process.env.SECRET_KEY,
    ADMIN_TOKEN: process.env.ADMIN_TOKEN,
    PUBLIC_TOKEN: process.env.PUBLIC_TOKEN,
    //Cloudinary
    CLOUDINARY_CLOUD_NAME: process.env.CLOUDINARY_CLOUD_NAME,
    CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY,
    CLOUDINARY_API_SECRET: process.env.CLOUDINARY_API_SECRET
};
exports.default = config;
