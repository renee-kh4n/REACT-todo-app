import { useState } from "react"
import "./styles.css"
import { NewTodoForm } from "./Form";

export default function App(){
  
  const [todos, setTodos] = useState([]);

  function addTodo(title){
    setTodos(currentTodoList =>  {
      return [...currentTodoList, 
        {id: crypto.randomUUID(), 
          title, 
          completed: false}]
    })
  }

  function toggleTodo(id, completed){
    setTodos(currentTodoList =>{
      return currentTodoList.map(todo => {
        if(todo.id === id){
          return {...todo, completed}
        }

      return todo

      })
    })
  }

  function deleteTodo(id){
    setTodos(currentTodoList =>{
      return currentTodoList.filter(todo => todo.id !== id)}
      )
  }

  return <>
  {/* addTodo={addTodo} is referred to as a prop to add functionality to the element*/}
<NewTodoForm onSubmit={addTodo}/>
<h1 className="header">My To Do List</h1>

</>

}