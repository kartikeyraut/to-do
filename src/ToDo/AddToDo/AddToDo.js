import React, { useState } from "react";
import ToDoForm from "./ToDoForm/ToDoForm";
function AddToDo(props) {
  const [addingToDo, setAddingToDo] = useState(false);
  const addingHandler = (val) => {
    setAddingToDo(val);
  };
  return (
    <div className=" flex flex-row bg-addtodo-bg py-4 rounded-lg ">
      {!addingToDo && (
        <button className="relative bg-todo-btn hover:bg-todo-btn-hover w-20 py-2 rounded-lg m-0 mx-auto" onClick={() => addingHandler(true)}>Add Todo</button>
      )}
      {addingToDo && (
        <ToDoForm 
            onCancel={addingHandler} 
            />
      )}
    </div>
  );
}

export default AddToDo;
