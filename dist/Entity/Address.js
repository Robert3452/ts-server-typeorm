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
exports.Address = void 0;
var typeorm_1 = require("typeorm");
var User_1 = require("./User");
var Address = /** @class */ (function () {
    function Address() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], Address.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Address.prototype, "address", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Address.prototype, "description", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Address.prototype, "district", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Address.prototype, "province", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Address.prototype, "department", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Address.prototype, "phoneNumber", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Address.prototype, "postalCode", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return User_1.User; }, function (user) { return user.addresses; }),
        __metadata("design:type", User_1.User)
    ], Address.prototype, "user", void 0);
    Address = __decorate([
        typeorm_1.Entity()
    ], Address);
    return Address;
}());
exports.Address = Address;
