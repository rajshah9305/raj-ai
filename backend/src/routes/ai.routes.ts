import { Router } from 'express';
import { AIController } from '../controllers/ai.controller';
import { authenticateJWT } from '../middleware/auth.middleware';
import { body } from 'express-validator';

const router = Router();

router.post(
  '/generate',
  authenticateJWT,
  [body('prompt').isString().notEmpty()],
  AIController.generate
);

export default router;