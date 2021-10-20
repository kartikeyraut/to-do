import React, { useContext } from "react";
import ToDoContext from "../store/TodoContext";
import ToDoList from "./ToDoList/ToDoList";
import Spinner from "../UI/Spinner/Spinner";

function ViewToDo() {
  const ctx = useContext(ToDoContext);
  return (
    <div className="mt-6 bg-viewtodo-bg rounded-lg py-4">
      {ctx.loading && (
        <center>
          <Spinner color="white" size="fa-3x" />
        </center>
      )}
      <ToDoList />
    </div>
  );
}

export default ViewToDo;
