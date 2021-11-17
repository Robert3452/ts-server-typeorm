import { Router } from 'express';
import { uploadFile } from '../middlewares/multer';
import passport from 'passport';
import sValidate from '../middlewares/scopesValidationHandler';
const jwtMiddleware = passport.authenticate('jwt', { session: false });
import * as productController from '../controllers/product.controller';
const router = Router();

router.post('/',
    jwtMiddleware,
    sValidate(["create:products"]),
    uploadFile.array("images", 8),
    productController.createProduct);

router.get('/',
    productController.listProducts)