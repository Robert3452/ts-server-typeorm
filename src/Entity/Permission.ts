import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm'
import { Scope } from './Scope';

@Entity()
export class Permission {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    permmssion: string;

    @ManyToOne(() => Scope, scope => scope.permissions)
    scope: Scope;

}