import fs from 'fs';
import path from 'path';
import { Router } from 'express';

const router = Router();

router.get('/dito', (req, res) => {
  try {
    const filePath = path.join(process.cwd(), 'public', 'Funnel_Exportado.json');
    const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

    const { columna, valor } = req.query;

    if (!columna || !valor) {
      return res.status(400).json({ error: "Debes enviar ?columna=...&valor=..." });
    }

    const resultados = data.filter(item => String(item[columna]) === String(valor));
    res.status(200).json(resultados);
  } catch (err) {
    console.error("Error en la API:", err);
    res.status(500).json({ error: "Error interno", detalle: err.message });
  }
});

export default router;