// Importamos createContext, useState y useContext
// Los roles de estas funciones son:
// - createContext: Nos permite crear un contexto
// - useState: Nos permite crear una variable "reactiva" que es la que se va a compartir
// - useContext: Nos permite utilizar el contexto creado

import { createContext, useState, useContext } from "react";

// Creamos el contexto
const GeneralContext = createContext();

// Creamos el componente que envuelve a los componentes que queremos compartir la variable
// Se llama "MyContext" porque es un ejemplo, pero puede tener cualquier nombre
// Pero siempre accederemos con ".Provider"
// -> dentro estará value, que es el valor que se va a compartir
// -> dentro estará {children}, que es el o los componentes que se van a envolver

// Debemos crear y exportar el componente (envoltorio)
// Esto es lo que importaremos para envolver las componentes en las que usaremos las variables
export const MyContext = ({ children }) => {
  const [color, setColor] = useState("red");

  return (
    <GeneralContext.Provider
      value={{
        color,
        setColor,
      }}
    >
      {children}
    </GeneralContext.Provider>
  );
};

// Creamos un tipo de "hook personalizado" para acceder a este contexto
// Esto es lo que importaremos en los componentes que queramos utilizar el contexto
export const useGeneralContext = () => {
  return useContext(GeneralContext);
};
