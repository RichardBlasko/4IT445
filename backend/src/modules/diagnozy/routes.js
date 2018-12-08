import { Router } from 'express';

import {
  diagnozyController,
  createDiagnozyController,
  deleteDiagnozyController,
  updateDiagnozyController,
  diagnozyDetailController
} from './diagnozyController';

const router = Router();
router.get('/', diagnozyController);
router.get('/:id', diagnozyDetailController);
router.post('/', createDiagnozyController);
router.delete('/', deleteDiagnozyController);
router.put('/', updateDiagnozyController);

export default router;
