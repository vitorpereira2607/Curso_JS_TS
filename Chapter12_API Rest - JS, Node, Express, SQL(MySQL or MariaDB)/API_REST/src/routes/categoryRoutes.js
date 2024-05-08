import { Router } from 'express';
import CategoryController from '../controllers/CategoryController';

const router = new Router();

router.get('/index', CategoryController.index);
// router.get('/', loginRequired, CategoryController.show);

// router.post('/', CategoryController.store);
// router.put('/', loginRequired, CategoryController.update);
// router.delete('/', loginRequired, CategoryController.delete);

export default router;
