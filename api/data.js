export default function handler(req, res) {
  const datos = [
    { id: 1, nombre: "Producto A" },
    { id: 2, nombre: "Producto B" }
  ];
  res.status(200).json(datos);
}