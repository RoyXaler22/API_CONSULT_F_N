import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  try {
    // Leer el JSON desde /public
    const filePath = path.join(process.cwd(), 'public', 'Funnel_Exportado.json');
    const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

    // Obtener parámetros de la URL
    const { columna, valor } = req.query;

    if (!columna || !valor) {
      return res.status(400).json({ error: "Debes enviar ?columna=...&valor=..." });
    }

    // Filtrar coincidencias
    const resultados = data.usuarios.filter(item => String(item[columna]) === String(valor));

    res.status(200).json(resultados);
  } catch (err) {
    console.error("Error en la API:", err);
    res.status(500).json({ error: "Error interno", detalle: err.message });
  }
}