import { Router } from 'express';

import {
  seznamVController,
  createSeznamVController,
  deleteSeznamVController,
} from './seznamVController';

const router = Router();
router.get('/', seznamVController);
router.post('/', createSeznamVController);
router.delete('/', deleteSeznamVController);

export default router;
