import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';
import { Product } from './Product';

@Entity()
export class ProductVariation {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    price: string;

    @Column()
    sku: string;

    @ManyToOne(() => Product, product => product.productVariations)
    product: Product;

}