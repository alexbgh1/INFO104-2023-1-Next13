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

export function GET(req, res) {
  console.log("Desde el servidor GET");
  return NextResponse.json(miArreglo);
}

export async function POST(req) {
  console.log("Desde el servidor POST");
  // Recibimos los datos del cliente
  const { id, nombre } = await req.json();
  // Si id o nombre no existen, retornamos un error
  if (!id || !nombre) {
    console.log("Faltan datos");
    return NextResponse.json({ error: "Faltan datos" });
  }

  // Agregamos el nuevo objeto al arreglo
  miArreglo.push({ id, nombre }); // { id: id, nombre: nombre }
  // Enviamos el nuevo arreglo al cliente
  console.log(miArreglo);
  return NextResponse.json(miArreglo);
}

// NOTA: La información se pierde al reiniciar el servidor o recargar la página
// Para que la información se mantenga, se debe usar una base de datos

// Pero de esta forma podemos simular el funcionamiento de una API
