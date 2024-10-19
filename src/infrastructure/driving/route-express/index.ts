import { Router } from 'express';
const router = Router();

router.use('*', (req, res) => {
  res.status(404).json({ message: 'Not found' });
});

export default router;