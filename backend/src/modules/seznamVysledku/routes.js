import { Router } from 'express';

import {
  seznamVController,
  createSeznamVController,
  deleteSeznamVController,
  updateSeznamVController
} from './seznamVController';

const router = Router();
router.get('/', seznamVController);
router.post('/', createSeznamVController);
router.delete('/', deleteSeznamVController);
router.put('/', updateSeznamVController);

export default router;
