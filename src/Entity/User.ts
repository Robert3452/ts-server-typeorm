import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToMany, JoinTable } from 'typeorm'
import { Address } from './Address';
import { Order } from './Order';
import { Scope } from './Scope';
import { ShoppingCart } from './ShoppingCart';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false })
    firstnames: string;

    @Column({
        default: false,
        type:'bool'
    })
    isAdmin: boolean

    @Column({ nullable: false })
    lastnames: string;

    @Column({ nullable: false })
    password: string;

    @Column({ nullable: false, unique: true })
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

