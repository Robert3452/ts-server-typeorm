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
exports.ShoppingCart = void 0;
var typeorm_1 = require("typeorm");
var ShoppingCartDetail_1 = require("./ShoppingCartDetail");
var ShoppingCart = /** @class */ (function () {
    function ShoppingCart() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], ShoppingCart.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], ShoppingCart.prototype, "total", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], ShoppingCart.prototype, "igvTotal", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], ShoppingCart.prototype, "igv", void 0);
    __decorate([
        typeorm_1.OneToMany(function () { return ShoppingCartDetail_1.ShoppingCartDetail; }, function (shoppingCartDetail) { return shoppingCartDetail.shoppingCart; }),
        __metadata("design:type", Array)
    ], ShoppingCart.prototype, "shoppingCartDetail", void 0);
    ShoppingCart = __decorate([
        typeorm_1.Entity()
    ], ShoppingCart);
    return ShoppingCart;
}());
exports.ShoppingCart = ShoppingCart;
