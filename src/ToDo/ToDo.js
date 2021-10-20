import React from "react";
import AddToDo from "./AddToDo/AddToDo";
import ViewToDo from "./ViewToDo/ViewToDo";
import { ToDoContextProvider } from "./store/TodoContext";
function ToDo() {
  return (
    <ToDoContextProvider>
      <div className="min-h-screen min-w-screen bg-todo-bg text-white pt-8 px-4">
        <div className="max-w-screen-md  mx-auto">
          <AddToDo />
          <ViewToDo />
        </div>
      </div>
    </ToDoContextProvider>
  );
}

export default ToDo;
