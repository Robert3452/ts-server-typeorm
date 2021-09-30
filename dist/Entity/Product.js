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
exports.Product = void 0;
var typeorm_1 = require("typeorm");
var ProductVariation_1 = require("./ProductVariation");
var OrderDetail_1 = require("./OrderDetail");
var ShoppingCartDetail_1 = require("./ShoppingCartDetail");
var Product = /** @class */ (function () {
    function Product() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], Product.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Product.prototype, "name", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Product.prototype, "description", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Product.prototype, "price", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Product.prototype, "sku", void 0);
    __decorate([
        typeorm_1.OneToMany(function () { return ProductVariation_1.ProductVariation; }, function (productVariation) { return productVariation.product; }),
        __metadata("design:type", Array)
    ], Product.prototype, "productVariations", void 0);
    __decorate([
        typeorm_1.OneToOne(function () { return OrderDetail_1.OrderDetail; }, function (orderDetail) { return orderDetail.product; }),
        __metadata("design:type", OrderDetail_1.OrderDetail)
    ], Product.prototype, "orderDetail", void 0);
    __decorate([
        typeorm_1.OneToOne(function () { return ShoppingCartDetail_1.ShoppingCartDetail; }, function (shoppingCartDetail) { return shoppingCartDetail.product; }),
        __metadata("design:type", ShoppingCartDetail_1.ShoppingCartDetail)
    ], Product.prototype, "shoppingCartDetail", void 0);
    Product = __decorate([
        typeorm_1.Entity()
    ], Product);
    return Product;
}());
exports.Product = Product;
