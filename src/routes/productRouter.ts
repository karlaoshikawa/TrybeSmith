import { Router } from 'express';
import ProductsControllers from '../controllers/products.controllers';
import { validationAmount, validationName } from '../middleware/validateProducts';

const router = Router();

const productsControllers = new ProductsControllers();

router.post('/', validationName, validationAmount, productsControllers.addProducts);
router.get('/', productsControllers.allProducts);
 
export default router;