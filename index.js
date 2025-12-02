import express from 'express';
import { obtenerAltas } from './api/altas/data_altas.js';
import { buscarDito } from './api/dito/buscar_dito.js';
import { consultarMorosidad } from './api/morosidad/consulta_moro.js';
import { obtenerVentas } from './api/ventas/data_ventas.js';

const app = express();

// Rutas
app.get('/api/altas', obtenerAltas);
app.get('/api/dito', buscarDito);
app.get('/api/morosidad', consultarMorosidad);
app.get('/api/ventas', obtenerVentas);

// Puerto para Render
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});