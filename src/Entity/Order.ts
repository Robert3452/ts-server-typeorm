import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
  EntitySchema,
} from "typeorm";
import { OrderDetail } from "./OrderDetail";
import { Product } from "./Product";
import { User } from "./User";

@Entity({ name: "orders" })
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  total: number;

  @Column()
  igvTotal: number;

  @Column()
  igv: number;

  @Column()
  status: number;

  @OneToMany(() => OrderDetail, (orderDetail) => orderDetail.order)
  orderDetails: OrderDetail[];

  @ManyToOne(() => User, (user) => user.orders)
  user: User;
}
