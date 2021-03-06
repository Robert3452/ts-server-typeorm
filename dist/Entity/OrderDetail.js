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
const typeorm_1 = require("typeorm");
const Order_1 = require("./Order");
const Product_1 = require("./Product");
let OrderDetail = class OrderDetail {
};
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
    typeorm_1.ManyToOne(() => Order_1.Order, (order) => order.orderDetails),
    __metadata("design:type", Order_1.Order)
], OrderDetail.prototype, "order", void 0);
__decorate([
    typeorm_1.OneToOne(() => Product_1.Product, (product) => product.orderDetail),
    typeorm_1.JoinColumn(),
    __metadata("design:type", Product_1.Product)
], OrderDetail.prototype, "product", void 0);
OrderDetail = __decorate([
    typeorm_1.Entity({ name: "order_details" })
], OrderDetail);
exports.OrderDetail = OrderDetail;
