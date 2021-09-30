import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { ShoppingCartDetail } from './ShoppingCartDetail';

@Entity()
export class ShoppingCart {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    total: number;

    @Column()
    igvTotal: number;

    @Column()
    igv: number;

    @OneToMany(() => ShoppingCartDetail, shoppingCartDetail => shoppingCartDetail.shoppingCart)
    shoppingCartDetail: ShoppingCartDetail[];
}