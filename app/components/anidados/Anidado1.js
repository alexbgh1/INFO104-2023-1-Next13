// Componente en nivel (1) "más externo"
import Anidado2 from "./Anidado2";

const Anidado1 = ({ color, setColor }) => {
  return <Anidado2 color={color} setColor={setColor} />;
};

export default Anidado1;
