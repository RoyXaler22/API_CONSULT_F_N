import { Router } from 'express';

const router = Router();

router.get('/ventas', (req, res) => {
  const { nombre = "invitado" } = req.query; // lee parámetros de la URL
  res.status(200).json({ saludo: `Hola ${nombre}, bienvenido a la API 👋` });
});

export default router;