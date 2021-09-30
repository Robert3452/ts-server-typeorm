import { Entity, Column, PrimaryGeneratedColumn, OneToOne, ManyToOne,JoinColumn } from 'typeorm';
import { ShoppingCart } from './ShoppingCart';
import { Product } from './Product';

@Entity()
export class ShoppingCartDetail {
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

    @ManyToOne(() => ShoppingCart, shoppingCart => shoppingCart.shoppingCartDetail)
    shoppingCart: ShoppingCart

    @OneToOne(() => Product, product => product.shoppingCartDetail)
    @JoinColumn()
    product: Product

    

}