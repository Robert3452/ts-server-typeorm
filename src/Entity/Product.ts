import {
    Entity, Column, PrimaryGeneratedColumn, JoinColumn
    , OneToMany, OneToOne
} from 'typeorm';
import { ProductVariation } from './ProductVariation';
import { OrderDetail } from './OrderDetail';
import { ShoppingCartDetail } from './ShoppingCartDetail';
@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    price: string;

    @Column()
    sku: string;

    @OneToMany(() => ProductVariation, productVariation => productVariation.product)
    productVariations: ProductVariation[];

    @OneToOne(() => OrderDetail, orderDetail => orderDetail.product)
    orderDetail: OrderDetail;

    @OneToOne(() => ShoppingCartDetail, shoppingCartDetail => shoppingCartDetail.product)
    shoppingCartDetail: ShoppingCartDetail;

}