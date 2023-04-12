import SubLayout from "@/components/sub-layout";
import Head from "next/head";

import { useState, useEffect } from "react";
import todosJson from "@/pages/api/todo.json";
import TodoItem from "@/components/TodoItem";

// Recordar TODOS los checkbox
export default function Ejemplo2() {
  // window !== "undefined" ? : es para que no se ejecute en el lado del servidor
  // JSON.parse(localStorage.getItem("todos")) ?? todosJson: Si no hay nada en localStorage, usa los datos de todosJson
  // : []: Si no hay nada en localStorage, usa un arreglo vacío	(Esto lo renderiza en el lado del servidor)
  const todosLS =
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("todos")) ?? todosJson
      : [];

  const [todos, setTodos] = useState(todosLS);
  const [paginaLista, setPaginaLista] = useState(false);

  // Una vez que la página carga, cambia el estado de paginaLista a true
  useEffect(() => {
    setPaginaLista(true);
  }, []);

  // Almacena los datos en LocalStorage cada vez que cambian los todos
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // Marca un todo como completado o no completado (y actualiza los todos)
  const handleTodoCheck = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, checked: !todo.checked };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <SubLayout pageId="localStorage">
      <Head>
        <title>LocalStorage - Ejemplo 2</title>
      </Head>
      <div className="container">
        <h1 className="title">Ejemplo 2</h1>
        <p className="text">Hacer que los checkbox recuerden</p>

        {/* Si la página está cargada, muestra los todos */}
        {paginaLista ? (
          <div className="container__map">
            {todos.map((item) => (
              <TodoItem
                key={item.id}
                item={item}
                handleTodoCheck={handleTodoCheck}
              />
            ))}
          </div>
        ) : (
          // Si la página no está cargada, muestra un mensaje (puede ser null, algún spinner)
          // Pero es para que se vea que la página no está lista, al recargar la página se ve
          <p>La página aún no está lista</p>
        )}
      </div>
    </SubLayout>
  );
}
