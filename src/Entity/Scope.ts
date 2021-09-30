import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne } from 'typeorm'
import { Permission } from './Permission';


@Entity()
export class Scope {
    @PrimaryGeneratedColumn()
    id: number;


    @Column()
    token: string;

    @OneToMany(() => Permission, permission => permission.scope)
    permissions: Permission[];

}