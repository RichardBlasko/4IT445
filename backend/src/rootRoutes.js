import { Router } from 'express';

import loginRoutes from './modules/login/routes';
import prevenceRoutes from './modules/prevence/routes';
import diagnozyRoutes from './modules/diagnozy/routes';
import seznamVRoutes from './modules/seznamVysledku/routes';
import partneriRoutes from './modules/partneri/routes';
import pribehyRoutes from './modules/pribehy/routes';

const router = Router();

router.use('/api/login', loginRoutes);
router.use('/api/prevence', prevenceRoutes);
router.use('/api/diagnozy', diagnozyRoutes);
router.use('/api/vysledky', seznamVRoutes);
router.use('/api/partneri', partneriRoutes);
router.use('/api/pribehy', pribehyRoutes);

export default router;
