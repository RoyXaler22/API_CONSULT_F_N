import duckdb from 'duckdb';
import path from 'path';

export default async function handler(req, res) {
  try {
    const db = new duckdb.Database(':memory:');
    const filePath = path.join(process.cwd(), 'public', 'Funnel_Exportado.parquet');

    // Consulta con límite
    const rows = await new Promise((resolve, reject) => {
      db.all(`SELECT * FROM read_parquet('${filePath}') LIMIT 100`, (err, result) => {
        if (err) reject(err);
        else resolve(result);
      });
    });

    res.status(200).json(rows);
  } catch (err) {
    console.error("Error leyendo parquet:", err);
    res.status(500).json({ error: "Error leyendo archivo parquet", detalle: err.message });
  }
}