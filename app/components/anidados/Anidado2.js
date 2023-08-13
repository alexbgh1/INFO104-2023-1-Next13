// Componente en nivel (2)
import Anidado3 from "./Anidado3";

const Anidado2 = ({ color, setColor }) => {
  return <Anidado3 color={color} setColor={setColor} />;
};

export default Anidado2;
