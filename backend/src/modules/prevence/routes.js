import { Router } from 'express';

import {
  prevenceController,
  createPrevenceController,
  deletePrevenceController,
} from './prevenceController';

const router = Router();
router.get('/', prevenceController);
//router.get('/:id', productDetailController);
router.post('/', createPrevenceController);
router.delete('/', deletePrevenceController);

export default router;
