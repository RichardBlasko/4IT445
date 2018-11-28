import { Router } from 'express';

import {
  pribehyController,
  createPribehyController,
  deletePribehyController,
  updatePribehyController,
} from './pribehyController';

const router = Router();
router.get('/', pribehyController);
router.post('/', createPribehyController);
router.delete('/', deletePribehyController);
router.put('/', updatePribehyController);

export default router;
