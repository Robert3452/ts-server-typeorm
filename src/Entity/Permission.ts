import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm'
import { Scope } from './Scope';

@Entity()
export class Permission {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    permission: string;

    @ManyToOne(() => Scope, scope => scope.permissions, { onDelete: "CASCADE", })
    scope: Scope;

}