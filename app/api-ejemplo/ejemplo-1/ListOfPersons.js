// https://github.com/vercel/next.js/issues/48344#issuecomment-1653612812
const fetchData = async () => {
  const res = await import("../../api/ejemplo-1", { method: "GET" });
  const data = res.miArreglo;
  return data;
};

const ListOfPersons = async () => {
  const data = await fetchData(); // Esperamos a que la función fetchData termine de ejecutarse
  return (
    <>
      {
        // Si hay datos, los mostramos
        data.length > 0 &&
          data.map((persona) => (
            <div key={persona.id}>
              <p className="text">{persona.nombre}</p>
              <p className="text">{persona.apellido}</p>
              <p className="text">{persona.edad}</p>
            </div>
          ))
      }{" "}
    </>
  );
};

export default ListOfPersons;
