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
exports.ShoppingCartDetail = void 0;
var typeorm_1 = require("typeorm");
var ShoppingCart_1 = require("./ShoppingCart");
var Product_1 = require("./Product");
var ShoppingCartDetail = /** @class */ (function () {
    function ShoppingCartDetail() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], ShoppingCartDetail.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], ShoppingCartDetail.prototype, "productName", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], ShoppingCartDetail.prototype, "price", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], ShoppingCartDetail.prototype, "unitPrice", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], ShoppingCartDetail.prototype, "quantity", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return ShoppingCart_1.ShoppingCart; }, function (shoppingCart) { return shoppingCart.shoppingCartDetail; }),
        __metadata("design:type", ShoppingCart_1.ShoppingCart)
    ], ShoppingCartDetail.prototype, "shoppingCart", void 0);
    __decorate([
        typeorm_1.OneToOne(function () { return Product_1.Product; }, function (product) { return product.shoppingCartDetail; }),
        typeorm_1.JoinColumn(),
        __metadata("design:type", Product_1.Product)
    ], ShoppingCartDetail.prototype, "product", void 0);
    ShoppingCartDetail = __decorate([
        typeorm_1.Entity()
    ], ShoppingCartDetail);
    return ShoppingCartDetail;
}());
exports.ShoppingCartDetail = ShoppingCartDetail;
