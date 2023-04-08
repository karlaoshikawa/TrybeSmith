import ProductsModels from '../models/products.models';
import { IProduct } from '../interfaces';
import connection from '../models/connection';
// import productsValidation from './validations/productsValidation';

export default class ProductsServices {
  private productsModels: ProductsModels;
  
  constructor() {
    this.productsModels = new ProductsModels(connection);
  }

  public async addProducts(product: IProduct) {
    const result = await this.productsModels.addProducts(product);
    return result;
  }

  public async allProducts(): Promise<IProduct[]> {
    const products = await this.productsModels.allProducts();
    return products;
  }
}