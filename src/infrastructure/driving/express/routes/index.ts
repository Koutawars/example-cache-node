import { Router } from 'express';
import users from './user';
const router = Router();

router.use('/user', users);

router.use('*', (req, res) => {
  res.status(404).json({ message: 'Not found' });
});

export default router;