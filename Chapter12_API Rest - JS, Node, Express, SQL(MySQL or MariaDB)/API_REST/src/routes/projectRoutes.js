import { Router } from 'express';
import ProjectController from '../controllers/ProjectController';

const router = new Router();

router.get('/index', ProjectController.index);
// router.get('/', loginRequired, ProjectController.show);

// router.post('/', ProjectController.store);
// router.put('/', loginRequired, ProjectController.update);
// router.delete('/', loginRequired, ProjectController.delete);

export default router;
