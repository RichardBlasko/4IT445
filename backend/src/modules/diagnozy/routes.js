import { Router } from 'express';

import {
  diagnozyController,
  createDiagnozyController,
  deleteDiagnozyController,
} from './diagnozyController';

const router = Router();
router.get('/', diagnozyController);
router.post('/', createDiagnozyController);
router.delete('/', deleteDiagnozyController);

export default router;
