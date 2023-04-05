import SubLayout from "@/components/sub-layout";
import Head from "next/head";

import { useEffect, useState } from "react";
import todosJson from "@/pages/api/todo.json";
import TodoItem from "@/components/TodoItem";

export default function Ejemplo1() {
  // Utilizaremos useState para guardar el estado de los checkbox
  // Revisando si hay algo en localStorage

  const [todos, setTodos] = useState(todosJson);

  return (
    <SubLayout pageId="localStorage">
      <Head>
        <title>LocalStorage - Ejemplo 1</title>
      </Head>
      <div className="container">
        <h1 className="title">Ejemplo 1</h1>
        <p className="text">Hacer que los checkbox recuerden</p>
        <div className="container__map">
          {todos.map((item) => (
            <TodoItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </SubLayout>
  );
}
