import { NextResponse } from "next/server";

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

export default function GET(req, res) {
  res.status(200).json(miArreglo);
}

export async function POST(req, res) {
  // Recibimos los datos del cliente
  console.log(req.json());
  const { id, nombre } = req.body;
  // Si id o nombre no existen, retornamos un error
  if (!id || !nombre) {
    console.log("Faltan datos");
    return NextResponse.next(400, { error: "Faltan datos" });
    // res.status(400).json({ error: "Faltan datos" });
  }

  // Agregamos el nuevo objeto al arreglo
  miArreglo.push({ id, nombre }); // { id: id, nombre: nombre }
  // Enviamos el nuevo arreglo al cliente
  return NextResponse.next(200, miArreglo);
}

// NOTA: La información se pierde al reiniciar el servidor o recargar la página
// Para que la información se mantenga, se debe usar una base de datos

// Pero de esta forma podemos simular el funcionamiento de una API
