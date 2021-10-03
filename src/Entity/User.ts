import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToMany, JoinTable, Unique } from 'typeorm'
import { Address } from './Address';
import { Order } from './Order';
import { Scope } from './Scope';
import { ShoppingCart } from './ShoppingCart';

@Entity()
@Unique(["email"])
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstnames: string;

    @Column({
        default: false,
    })
    isAdmin: boolean

    @Column()
    lastnames: string;

    @Column()
    password: string;

    @Column()
    email: string;

    @Column()
    role: number;

    @OneToMany(() => Address, address => address.user)
    addresses: Address[]

    @OneToMany(() => Order, order => order.user)
    orders: Order[]

    @OneToMany(() => ShoppingCart, shoppingCart => shoppingCart.user)
    shoppingCarts: ShoppingCart[]


    @ManyToMany(() => Scope)
    @JoinTable()
    scopes: Scope[]


}

