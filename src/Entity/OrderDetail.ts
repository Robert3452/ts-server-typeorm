import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  JoinColumn,
  ManyToOne,
  OneToOne,
} from "typeorm";
import { Order } from "./Order";
import { Product } from "./Product";

@Entity({ name: "order_details" })
export class OrderDetail {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  productName: string;

  @Column()
  price: number;

  @Column()
  unitPrice: number;

  @Column()
  quantity: number;

  @ManyToOne(() => Order, (order) => order.orderDetails)
  order: Order;

  @OneToOne(() => Product, (product) => product.orderDetail)
  @JoinColumn()
  product: Product;
}
