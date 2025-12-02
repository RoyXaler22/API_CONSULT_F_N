import express from 'express';
import dataAltasRouter from './api/altas/data_altas.js';
import buscarDitoRouter from './api/dito/buscar_dito.js';
import consultaMoroRouter from './api/morosidad/consulta_moro.js';
import dataVentasRouter from './api/ventas/data_ventas.js';

const app = express();

// Rutas agrupadas bajo /api
app.use('/api', dataAltasRouter);
app.use('/api', buscarDitoRouter);
app.use('/api', consultaMoroRouter);
app.use('/api', dataVentasRouter);

// Puerto asignado por Render
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
