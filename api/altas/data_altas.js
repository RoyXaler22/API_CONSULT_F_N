import { Router } from 'express';

const router = Router();

router.get('/altas', (req, res) => {
  res.status(200).json({ message: "Hola desde Render con Node.js 🚀" });
});

export default router;