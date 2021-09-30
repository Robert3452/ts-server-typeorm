"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var morgan_1 = __importDefault(require("morgan"));
var cors_1 = __importDefault(require("cors"));
var path_1 = __importDefault(require("path"));
var config_1 = __importDefault(require("./config"));
var PORT = config_1.default.PORT;
var routes_1 = __importDefault(require("./routes"));
var app = express_1.default();
var errorHandler_1 = require("./middlewares/errorHandler");
var notFoundHandler_1 = __importDefault(require("./middlewares/notFoundHandler"));
require("./database/mysql");
app.set('port', PORT);
app.use(express_1.default.json());
app.use(morgan_1.default("dev"));
app.use(cors_1.default());
app.use('/api', routes_1.default);
app.use('/uploads', express_1.default.static(path_1.default.resolve('uploads')));
app.use(errorHandler_1.logErrors);
app.use(errorHandler_1.wrapErrors);
app.use(errorHandler_1.errorHandler);
app.use(notFoundHandler_1.default);
exports.default = app;
