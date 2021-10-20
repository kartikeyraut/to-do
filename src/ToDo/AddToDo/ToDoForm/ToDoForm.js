import React , {  useState , useContext } from "react";
import ToDoContext from "../../store/TodoContext";
function ToDoForm(props) {
  const ctx=useContext(ToDoContext)
  const [taskIsValid, settaskIsValid] = useState(true)
  const [task, settask] = useState('')

  const onChangeHandler=(event)=>{
    if(!taskIsValid)
    {
      settaskIsValid(true)
    } 
    settask(event.target.value)
  }

  const onSubmitHandler=(event)=>{
        event.preventDefault()
        if(task=='')
        {
          settaskIsValid(false)
          return
        }
        const date=new Date().toDateString();
        const data={
          task:task,
          completed:false,
          dateAdded:date,
        }
        ctx.addToDo(data,settask)
  }

  return (
    <form className="flex flex-col px-4 w-full"onSubmit={onSubmitHandler}>
          <label className="text-gray-700 font-bold mb-2">New ToDo Task</label>

          <input className='rounded-lg pl-2 py-2 max-w-sm text-black'
          type="text" placeholder='Enter Your ToDo task here....' value={task} onChange={onChangeHandler}/>
          {!taskIsValid && <label className='text-red-900 font-semibold '>Please enter something....</label>}
  
      <div className="flex flex-row  space-x-3 mt-4 justify-end">
        <button className="bg-todo-btn hover:bg-todo-btn-hover w-20 py-2 justify-center rounded-lg m-0" type="button" onClick={()=>props.onCancel(false)}>Cancel</button>
        <button className="bg-todo-btn hover:bg-todo-btn-hover w-20 py-2 justify-center rounded-lg m-0" type="submit">Add ToDo</button>
      </div>
    </form>
  );
}

export default ToDoForm;
