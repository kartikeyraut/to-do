import React, { useContext } from "react";
import ToDoContext from "../../store/TodoContext";
import ToDoItem from "./ToDoItem/ToDoItem";
function ToDoList() {
  const ctx = useContext(ToDoContext);
  if (!ctx.loading && ctx.toDoList.length === 0) {
    return <div className="flex flex-row justify-center font-semibold text-2xl">
      

      Found no ToDo's.
      
      
      </div>;
  }

  return (
    <div>
      <ul className="flex flex-col">
        {ctx.toDoList.map((toDo) => (
          <ToDoItem
            key={toDo.id}
            item={toDo}
            
          />
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
