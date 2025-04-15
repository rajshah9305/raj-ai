import { Router } from 'express';
import { ProjectController } from '../controllers/project.controller';
import { authenticateJWT } from '../middleware/auth.middleware';
import { body, param } from 'express-validator';

const router = Router();

router.use(authenticateJWT);

router.post(
  '/',
  [
    body('name').isString().notEmpty(),
    body('description').isString().notEmpty(),
    body('code').isString().notEmpty()
  ],
  ProjectController.create
);

router.get('/', ProjectController.list);

router.put(
  '/:projectId',
  [
    param('projectId').isNumeric(),
    body('name').optional().isString(),
    body('description').optional().isString(),
    body('code').optional().isString()
  ],
  ProjectController.update
);

router.delete(
  '/:projectId',
  [param('projectId').isNumeric()],
  ProjectController.delete
);

export default router;