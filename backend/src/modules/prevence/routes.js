import { Router } from 'express';

import {
  prevenceController,
} from './prevenceController';

const router = Router();
router.get('/', prevenceController);
//router.get('/:id', productDetailController);

export default router;
