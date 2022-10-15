import { Router } from 'express';
const router = Router();

import { getProducts } from '../controllers/products-controller';

router.route('/')
    .get(getProducts)
    .post()
    .put()
    .delete();

export default router;