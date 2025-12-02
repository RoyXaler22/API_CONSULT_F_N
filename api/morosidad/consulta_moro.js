import { Router } from 'express';

const router = Router();

router.get('/morosidad', (req, res) => {
  const datos = [
    { id: 1, nombre: "Producto A" },
    { id: 2, nombre: "Producto B" }
  ];
  res.status(200).json(datos);
});

export default router;