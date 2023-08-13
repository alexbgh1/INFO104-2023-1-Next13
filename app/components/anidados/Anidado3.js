// Componente en nivel (3) "más interno"

const Anidado3 = ({ color, setColor }) => {
  return (
    <div className="container">
      <h1 className="title">Pasando props (método "normal")</h1>
      <p className="text">
        <b>Color:</b> <i>{color}</i>
      </p>
      <div style={{ display: "grid", gap: "2rem" }}>
        <button className="btn" onClick={() => setColor("red")}>
          Rojo
        </button>
        <button className="btn" onClick={() => setColor("blue")}>
          Azul
        </button>
        <button className="btn" onClick={() => setColor("green")}>
          Verde
        </button>
      </div>
    </div>
  );
};

export default Anidado3;
