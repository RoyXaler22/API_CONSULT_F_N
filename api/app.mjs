import express from 'express';
import duckdb from 'duckdb';
import path from 'path';

const app = express();
const PORT = 3000;

// Inicializa la base DuckDB en memoria
const db = new duckdb.Database(':memory:');

app.get('/api/parquet', (req, res) => {
  try {
    const filePath = path.join(process.cwd(), 'public', 'Funnel_Exportado.parquet');

    // Consulta con LIMIT para evitar respuestas enormes
    db.all(`SELECT * FROM read_parquet('${filePath}') LIMIT 100`, (err, rows) => {
      if (err) {
        console.error("Error leyendo parquet:", err);
        return res.status(500).json({ error: "Error leyendo archivo parquet", detalle: err.message });
      }
      res.json(rows); // Devuelve las primeras 100 filas como JSON
    });
  } catch (err) {
    res.status(500).json({ error: "Error general", detalle: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});