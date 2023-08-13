"use client";
import { useState } from "react";
const TodoItem = ({ item, handleTodoCheck }) => {
  const [listo, setListo] = useState(item.checked);

  return (
    <>
      <div className="todo-item">
        <div className="todo-item-title">{item.title}</div>
        <div className="todo-item-checked">
          <input
            type="checkbox"
            checked={listo}
            onChange={(e) => {
              setListo(!listo);
              handleTodoCheck(item.id);
            }}
          />
        </div>
      </div>
    </>
  );
};
export default TodoItem;
