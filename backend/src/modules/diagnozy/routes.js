import { Router } from 'express';

import {
  diagnozyController,
  createDiagnozyController,
} from './diagnozyController';

const router = Router();
router.get('/', diagnozyController);
router.post('/', createDiagnozyController);

export default router;
