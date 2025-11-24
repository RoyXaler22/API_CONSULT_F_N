import { ParquetReader } from 'parquetjs-lite';
import path from 'path';

export default async function handler(req, res) {
  try {
    const filePath = path.join(process.cwd(), 'public', 'Funnel_parquet.parquet');
    let reader = await ParquetReader.openFile(filePath);
    let cursor = reader.getCursor();
    let record;
    let results = [];

    while ((record = await cursor.next())) {
      results.push(record);
    }

    await reader.close();
    res.status(200).json(results);
  } catch (err) {
    res.status(500).json({ error: "Error leyendo archivo parquet", detalle: err.message });
  }
}