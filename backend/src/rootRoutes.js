import { Router } from 'express';

import loginRoutes from './modules/login/routes';
import modelIndex from './models/index';

const router = Router();

router.use('/api/login', loginRoutes);
router.use('/api/test', modelIndex);


export default router;
