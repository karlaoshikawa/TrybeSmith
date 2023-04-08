import { Request, Response } from 'express';
import ProductsServices from '../services/products.services';

export default class ProductsController {
  private productsServices: ProductsServices;

  constructor() {
    this.productsServices = new ProductsServices();
  }

  public addProducts = async (req: Request, res: Response) => {
    // const { amount, name } = req.body;
    // if (!name) return res.status(400).json({ message: '"name" is required' });
    // if (!amount) return res.status(400).json({ message: '"amount" is required' });
    const result = await this.productsServices.addProducts(req.body);
    // if (!result) {
    //   res.status(400).json({ message: 'product invalid' });
    // }
    return res.status(201).json(result);
  };

  public allProducts = async (req: Request, res: Response) => {
    const products = await this.productsServices.allProducts();
    return res.status(200).json(products);
  };
}