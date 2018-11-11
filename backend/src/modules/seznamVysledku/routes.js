import { Router } from 'express';

import {
  seznamVController,
  createSeznamVController,
} from './seznamVController';

const router = Router();
router.get('/', seznamVController);
router.post('/', createSeznamVController);

export default router;
