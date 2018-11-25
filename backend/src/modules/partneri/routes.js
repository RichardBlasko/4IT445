import { Router } from 'express';

import {
  partneriController,
  createPartneriController,
  deletePartneriController,
  updatePartneriController,
} from './partneriController';

const router = Router();
router.get('/', partneriController);
router.post('/', createPartneriController);
router.delete('/', deletePartneriController);
router.put('/', updatePartneriController);

export default router;
