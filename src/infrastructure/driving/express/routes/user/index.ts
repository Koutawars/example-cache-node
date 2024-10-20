import { Router } from 'express';
import { buildExpressCallback } from '../../../../../utils/buildExpressCallback';
import { userController } from '../../controllers/user';
const router = Router();

router.get('/',  buildExpressCallback(userController.getUsers));

export default router;