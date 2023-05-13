export const miArreglo = [
  {
    id: 1,
    nombre: "Juan",
  },
  {
    id: 2,
    nombre: "Maria",
  },
  {
    id: 3,
    nombre: "Pedro",
  },
];

export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json(miArreglo);
    console.log("GET");
  }

  if (req.method === "POST") {
    // Recibimos los datos del cliente
    const { id, nombre } = req.body;
    // Si id o nombre no existen, retornamos un error
    if (!id || !nombre) {
      console.log("Faltan datos");
      res.status(400).json({ error: "Faltan datos" });
      return;
    }

    // Agregamos el nuevo objeto al arreglo
    miArreglo.push({ id, nombre }); // { id: id, nombre: nombre }
    // Enviamos el nuevo arreglo al cliente
    res.status(200).json(miArreglo);
    console.log("POST");
  }
}

// NOTA: La información se pierde al reiniciar el servidor o recargar la página
// Para que la información se mantenga, se debe usar una base de datos

// Pero de esta forma podemos simular el funcionamiento de una API
