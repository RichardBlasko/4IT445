import { Router } from 'express';

import loginRoutes from './modules/login/routes';
//import modelIndex from './models/index';
import prevenceRoutes from './modules/prevence/routes';
import diagnozyRoutes from './modules/diagnozy/routes';

const router = Router();

router.use('/api/login', loginRoutes);
//router.use('/api/test', modelIndex);
router.use('/api/prevence', prevenceRoutes);
router.use('/api/diagnozy', diagnozyRoutes);

export default router;
