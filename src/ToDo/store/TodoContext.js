import axios from "axios";
import React, { useState, useEffect } from "react";

import FirebaseUrl from "../Firebase/Firebase";

const ToDoContext = React.createContext({
  loading: false,
  toDoList: [],
  fetchData: () => {},
  addToDo: (data) => {},
  completeToDo:(data) => {},
  deleteToDo:(data) => {},
});

export const ToDoContextProvider = (props) => {
  const [loading, setloading] = useState(false);
  const [toDoList, settoDoList] = useState([]);

  const fetchData = async() => {
    setloading(true);
    axios.get(FirebaseUrl+'/Todo.json').then((response) => {
      const tempToDoList = [];
      for (const key in response.data) {
        tempToDoList.push({
          id: key,
          completed: response.data[key].completed,
          dateAdded: response.data[key].dateAdded,
          task: response.data[key].task,
        });
      }
      settoDoList(tempToDoList.reverse());
      setloading(false);
    });
  };

  const addToDo = (data,settask) => {
    setloading(true);
    axios
      .post(FirebaseUrl+'/Todo.json', {
        task: data.task,
        completed: data.completed,
        dateAdded: data.dateAdded,
      })
      .then((response) => {
        fetchData();
        settask('')
      });
  };

  const completeToDo = (data,val,setcompletedLoading) => {
    const id=data['id']
    const index=toDoList.findIndex((toDo)=>{
        return toDo.id===id
    })
    const tempData={...data}
    tempData['completed']=val
    axios.patch(FirebaseUrl+'/Todo/'+id+'.json',tempData)
    .then(response=>{
        setcompletedLoading(false)
        const tempToDoList=[...toDoList]
        tempToDoList[index]['completed']=val
        settoDoList(tempToDoList)
    })
  }

  const deleteToDo = (data,setdeleteLoading) => {
    const id=data['id']
    const index=toDoList.findIndex((toDo)=>{
        return toDo.id===id
    })
    axios.delete(FirebaseUrl+'/Todo/'+id+'.json')
    .then(response=>{
        setdeleteLoading(false)
        const tempToDoList=[...toDoList]
        tempToDoList.splice(index,1)
        settoDoList(tempToDoList)
    })
  }


  useEffect(() => {
    fetchData();
  }, []);

  return (
    <ToDoContext.Provider
      value={{
        loading: loading,
        toDoList: toDoList,
        fetchData: fetchData,
        addToDo:addToDo,
        completeToDo:completeToDo,
        deleteToDo:deleteToDo,
      }}
    >
      {props.children}
    </ToDoContext.Provider>
  );
};

export default ToDoContext;
