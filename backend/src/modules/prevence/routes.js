import { Router } from 'express';

import {
  prevenceController,
  createPrevenceController,
  deletePrevenceController,
  updatePrevenceController
} from './prevenceController';

const router = Router();
router.get('/', prevenceController);
//router.get('/:id', productDetailController);
router.post('/', createPrevenceController);
router.delete('/', deletePrevenceController);
router.put('/', updatePrevenceController);

export default router;
