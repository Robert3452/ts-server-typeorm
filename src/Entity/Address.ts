import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne } from 'typeorm';
import { User } from './User';

@Entity()
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