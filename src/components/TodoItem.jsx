import { useState, useEffect } from "react";
const TodoItem = ({ item }) => {
  const [listo, setListo] = useState(item.checked);

  useEffect(() => {
    if (localStorage.getItem(item.id) !== null)
      setListo(JSON.parse(localStorage.getItem(item.id)));
  }, []);

  useEffect(() => {
    localStorage.setItem(item.id, JSON.stringify(listo));
  }, [listo]);

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
            }}
          />
        </div>
      </div>
    </>
  );
};
export default TodoItem;
