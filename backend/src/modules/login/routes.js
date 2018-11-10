import { Router } from 'express';

import {
  loginController,
} from './loginController';

const router = Router();
router.get('/login', function(req, res){
  res.send("hello world");
});

export default router;
