"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var server_1 = __importDefault(require("./server"));
function main() {
    server_1.default.listen(server_1.default.get('port'), function () {
        console.log("Server on  port " + server_1.default.get('port'));
    });
}
main();
