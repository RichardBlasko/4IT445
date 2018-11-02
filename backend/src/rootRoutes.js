import { Router } from 'express';

import loginRoutes from './modules/login/routes';

const router = Router();

router.use('/api/login', loginRoutes);

export default router;
