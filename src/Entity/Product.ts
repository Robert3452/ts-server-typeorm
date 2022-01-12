import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  JoinColumn,
  OneToMany,
  OneToOne,
} from "typeorm";
import { ProductVariation } from "./ProductVariation";
import { OrderDetail } from "./OrderDetail";
import { ShoppingCartDetail } from "./ShoppingCartDetail";
import { Image } from "./Image";
@Entity({ name: "products" })
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  name: string;

  @Column()
  description: string;

  @Column({ nullable: false })
  price: number;

  @Column({ nullable: false })
  sku: string;

  @OneToMany(
    () => ProductVariation,
    (productVariation) => productVariation.product
  )
  productVariations: ProductVariation[];

  @OneToOne(() => OrderDetail, (orderDetail) => orderDetail.product)
  orderDetail: OrderDetail;

  @OneToOne(
    () => ShoppingCartDetail,
    (shoppingCartDetail) => shoppingCartDetail.product
  )
  shoppingCartDetail: ShoppingCartDetail;

  @OneToMany(() => Image, (image) => image.product)
  images: Image[];
}
