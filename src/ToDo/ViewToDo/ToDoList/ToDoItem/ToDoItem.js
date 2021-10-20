import React, { useState, useContext } from "react";
import ToDoContext from "../../../store/TodoContext";
import Spinner from "../../../UI/Spinner/Spinner";
function ToDoItem(props) {
  const ctx = useContext(ToDoContext);
  const [completedLoading, setcompletedLoading] = useState(false);
  // const [editLoading, setditonLoading] = useState(false)
  const [deleteLoading, setdeleteLoading] = useState(false);

  const updateCompletedHandler = (val) => {
    setcompletedLoading(true);
    ctx.completeToDo(props.item, val, setcompletedLoading);
  };

  const deleteHandler = () => {
    setdeleteLoading(true);
    ctx.deleteToDo(props.item, setdeleteLoading);
  };
  return (
    <li className="flex flex-row mx-4 my-2 bg-todoitem-bg rounded-lg p-2">
      <div className=" flex flex-row  flex-grow">
        {props.item.completed ? (
          <div
            className="flex flex-col  flex-shrink-0 my-auto justify-center text-white bg-green-600 hover:bg-green-800 rounded-lg border-2 w-7 h-7 cursor-pointer"
            onClick={() => {
              updateCompletedHandler(false);
            }}
          >
            {completedLoading ? (
              <Spinner />
            ) : (
              <i className="fa fa-check  mx-auto" />
            )}
          </div>
        ) : (
          <div
            className="flex flex-col flex-shrink-0 my-auto justify-center text-black bg-gray-400 hover:bg-gray-50 rounded-lg border-2 w-7 h-7 cursor-pointer"
            onClick={() => {
              updateCompletedHandler(true);
            }}
          >
            {completedLoading ? (
              <Spinner />
            ) : (
              <i className="fa fa-clock-o mx-auto" />
            )}
          </div>
        )}

        <h2 className="ml-2 text-lg font-semibold md:text-xl">
          {props.item.task}
        </h2>
      </div>

      <div
        className="flex flex-col flex-shrink-0 justify-center ml-3 my-auto text-black bg-gray-50 hover:bg-gray-400 rounded-lg border-2 w-7 h-7 cursor-pointer"
        onClick={deleteHandler}
      >
        {deleteLoading ? (
          <Spinner color="red" />
        ) : (
          <i className="fa fa-trash mx-auto" aria-hidden="true" />
        )}
      </div>
    </li>
  );
}

export default ToDoItem;
