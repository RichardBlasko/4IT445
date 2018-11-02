import { Router } from 'express';

import {
  loginController,
} from './loginController';

const router = Router();
router.get('/login', loginController);

export default router;
