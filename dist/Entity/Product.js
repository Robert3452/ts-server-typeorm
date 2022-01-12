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
const typeorm_1 = require("typeorm");
const ProductVariation_1 = require("./ProductVariation");
const OrderDetail_1 = require("./OrderDetail");
const ShoppingCartDetail_1 = require("./ShoppingCartDetail");
const Image_1 = require("./Image");
let Product = class Product {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Product.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ nullable: false }),
    __metadata("design:type", String)
], Product.prototype, "name", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Product.prototype, "description", void 0);
__decorate([
    typeorm_1.Column({ nullable: false }),
    __metadata("design:type", Number)
], Product.prototype, "price", void 0);
__decorate([
    typeorm_1.Column({ nullable: false }),
    __metadata("design:type", String)
], Product.prototype, "sku", void 0);
__decorate([
    typeorm_1.OneToMany(() => ProductVariation_1.ProductVariation, (productVariation) => productVariation.product),
    __metadata("design:type", Array)
], Product.prototype, "productVariations", void 0);
__decorate([
    typeorm_1.OneToOne(() => OrderDetail_1.OrderDetail, (orderDetail) => orderDetail.product),
    __metadata("design:type", OrderDetail_1.OrderDetail)
], Product.prototype, "orderDetail", void 0);
__decorate([
    typeorm_1.OneToOne(() => ShoppingCartDetail_1.ShoppingCartDetail, (shoppingCartDetail) => shoppingCartDetail.product),
    __metadata("design:type", ShoppingCartDetail_1.ShoppingCartDetail)
], Product.prototype, "shoppingCartDetail", void 0);
__decorate([
    typeorm_1.OneToMany(() => Image_1.Image, (image) => image.product),
    __metadata("design:type", Array)
], Product.prototype, "images", void 0);
Product = __decorate([
    typeorm_1.Entity({ name: "products" })
], Product);
exports.Product = Product;
