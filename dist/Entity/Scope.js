"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Scope = void 0;
var typeorm_1 = require("typeorm");
var Permission_1 = require("./Permission");
var Scope = /** @class */ (function () {
    function Scope() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], Scope.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Scope.prototype, "role", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Scope.prototype, "token", void 0);
    __decorate([
        typeorm_1.OneToMany(function () { return Permission_1.Permission; }, function (permission) { return permission.scope; }, { cascade: true, }),
        __metadata("design:type", Array)
    ], Scope.prototype, "permissions", void 0);
    Scope = __decorate([
        typeorm_1.Entity()
    ], Scope);
    return Scope;
}());
exports.Scope = Scope;
