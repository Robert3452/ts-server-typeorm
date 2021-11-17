import { col } from "sequelize";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "./Product";


@Entity()
export class Image {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({})
    alt: string;

    @Column({ nullable: false })
    url: string;

    @Column()
    imageId: string;

    @ManyToOne(() => Product, product => product.images)
    product: Product;


}