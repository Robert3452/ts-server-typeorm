import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm'
import { Permission } from './Permission';


@Entity({name:"scopes"})
export class Scope {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    role: string;

    @Column()
    token: string;

    @OneToMany(() => Permission, permission => permission.scope, { cascade: true, })
    permissions: Permission[];


}