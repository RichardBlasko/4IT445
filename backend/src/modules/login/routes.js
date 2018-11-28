import { Router } from 'express';

import {
  loginController,
} from './loginController';


const router = Router();
router.get('/', loginController);

export default router;
