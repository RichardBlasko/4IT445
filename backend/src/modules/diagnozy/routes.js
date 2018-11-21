import { Router } from 'express';

import {
  diagnozyController,
  createDiagnozyController,
  deleteDiagnozyController,
  updateDiagnozyController,
} from './diagnozyController';

const router = Router();
router.get('/', diagnozyController);
router.post('/', createDiagnozyController);
router.delete('/', deleteDiagnozyController);
router.put('/', updateDiagnozyController);

export default router;
