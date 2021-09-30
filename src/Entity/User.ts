import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm'
import { Address } from './Address';
import { Scope } from './Scope';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstnames: string;

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

}

