import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from './User';

@Entity({name:"addresses"})
export class Address {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    address: string;

    @Column()
    description: string;

    @Column()
    district: string;

    @Column()
    province: string;

    @Column()
    department: string;

    @Column()
    phoneNumber: string;

    @Column()
    postalCode: string;

    @ManyToOne(() => User, user => user.addresses)
    user: User;

}