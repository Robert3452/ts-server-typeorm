import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne } from 'typeorm';
import { ShoppingCartDetail } from './ShoppingCartDetail';
import { User } from './User';

@Entity({name:"shoppingcarts"})
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

    @ManyToOne(() => User, user => user.shoppingCarts)
    user: User

}