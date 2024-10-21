import { Router } from 'express';
import { buildExpressCallback } from '../../../../../utils/buildExpressCallback';
import { userController } from '../../controllers/user';
const router = Router();

router.get('/',  buildExpressCallback(userController.getUsers));
router.get('/:id', buildExpressCallback(userController.getUserById));

export default router;