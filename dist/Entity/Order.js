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
exports.Order = void 0;
var typeorm_1 = require("typeorm");
var OrderDetail_1 = require("./OrderDetail");
var User_1 = require("./User");
var Order = /** @class */ (function () {
    function Order() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], Order.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], Order.prototype, "total", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], Order.prototype, "igvTotal", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], Order.prototype, "igv", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], Order.prototype, "status", void 0);
    __decorate([
        typeorm_1.OneToMany(function () { return OrderDetail_1.OrderDetail; }, function (orderDetail) { return orderDetail.order; }),
        __metadata("design:type", Array)
    ], Order.prototype, "orderDetails", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return User_1.User; }, function (user) { return user.orders; }),
        __metadata("design:type", User_1.User)
    ], Order.prototype, "user", void 0);
    Order = __decorate([
        typeorm_1.Entity()
    ], Order);
    return Order;
}());
exports.Order = Order;
