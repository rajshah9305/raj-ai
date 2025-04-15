import { Router } from 'express';
import { AuthController } from '../controllers/auth.controller';
import { body } from 'express-validator';

const router = Router();

router.post(
  '/register',
  [
    body('username').isString().notEmpty(),
    body('email').isEmail(),
    body('password').isLength({ min: 6 })
  ],
  AuthController.register
);

router.post(
  '/login',
  [
    body('username').isString().notEmpty(),
    body('password').notEmpty()
  ],
  AuthController.login
);

export default router;