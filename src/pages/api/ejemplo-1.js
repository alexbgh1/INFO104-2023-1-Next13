// En este caso definimos información
export const miArreglo = [
  {
    id: 1,
    nombre: "Juan",
    apellido: "Perez",
    edad: 25,
  },
  {
    id: 2,
    nombre: "Maria",
    apellido: "Gomez",
    edad: 30,
  },
  {
    id: 3,
    nombre: "Pedro",
    apellido: "Gonzalez",
    edad: 40,
  },
];

// Y la manejamos con el método GET, por ruta sería en (local): http://localhost:3000/api/ejemplo-1
// Al ser relativo, se hace un fetch a /api/ejemplo-1
// Donde '/api/ejemplo' es la ruta en la que se encuentra este archivo

export default function handler(req, res) {
  res.status(200).json(miArreglo);
}
