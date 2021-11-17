import { NextFunction, Request, Response } from "express";
import { getRepository } from 'typeorm';
import { Product } from '../Entity/Product';
import boom from '@hapi/boom';



export const createProduct = async (req: Request, res: Response, next: NextFunction) => {
    const { name, description,price, } = req.body;
}

export const listProducts = async (req: Request, res: Response, next: NextFunction) => {

}