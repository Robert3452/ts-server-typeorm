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
exports.OrderDetail = void 0;
var typeorm_1 = require("typeorm");
var Order_1 = require("./Order");
var Product_1 = require("./Product");
var OrderDetail = /** @class */ (function () {
    function OrderDetail() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], OrderDetail.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], OrderDetail.prototype, "productName", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], OrderDetail.prototype, "price", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], OrderDetail.prototype, "unitPrice", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], OrderDetail.prototype, "quantity", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return Order_1.Order; }, function (order) { return order.orderDetails; }),
        __metadata("design:type", Order_1.Order)
    ], OrderDetail.prototype, "order", void 0);
    __decorate([
        typeorm_1.OneToOne(function () { return Product_1.Product; }, function (product) { return product.orderDetail; }),
        typeorm_1.JoinColumn(),
        __metadata("design:type", Product_1.Product)
    ], OrderDetail.prototype, "product", void 0);
    OrderDetail = __decorate([
        typeorm_1.Entity()
    ], OrderDetail);
    return OrderDetail;
}());
exports.OrderDetail = OrderDetail;
