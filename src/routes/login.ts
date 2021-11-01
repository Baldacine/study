import { Router } from 'express';

import * as loginController from '../controllers/loginController';

const router = Router();

router.post('/register', loginController.register);
router.post('/login', loginController.login);
router.get('/list', loginController.list);

export default router;