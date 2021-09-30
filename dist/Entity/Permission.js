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
exports.Permission = void 0;
var typeorm_1 = require("typeorm");
var Scope_1 = require("./Scope");
var Permission = /** @class */ (function () {
    function Permission() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], Permission.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Permission.prototype, "permmssion", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return Scope_1.Scope; }, function (scope) { return scope.permissions; }),
        __metadata("design:type", Scope_1.Scope)
    ], Permission.prototype, "scope", void 0);
    Permission = __decorate([
        typeorm_1.Entity()
    ], Permission);
    return Permission;
}());
exports.Permission = Permission;
