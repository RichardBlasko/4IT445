import { Router } from 'express';

import {
  prevenceController,
  createPrevenceController,
} from './prevenceController';

const router = Router();
router.get('/', prevenceController);
//router.get('/:id', productDetailController);
router.post('/', createPrevenceController);

export default router;
