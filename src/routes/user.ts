import { Router } from 'express';

import * as UserController from '../controllers/UserController';

const router = Router();

router.post('/register', UserController.register);
router.post('/login', UserController.login);
router.get('/list', UserController.list);

export default router;