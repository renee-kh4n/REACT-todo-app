import { useEffect, useState } from "react"
import "./styles.css"
import { NewTodoForm } from "./Form";
import { TodoList } from "./TodoList";

export default function App(){

  // const [todos, setTodos] = useState([]) //items are gone when refreshed

  //store items:
  const [todos, setTodos] = useState(() =>{
    const localValue = localStorage.getItem("ITEMS")

    if (localValue === null) return []

    return JSON.parse(localValue)
  })

  //hooks must always be on top
  useEffect(()=> { //useEffect tells us to run the ff functions
    localStorage.setItem("ITEMS", JSON.stringify(todos))
  }, [todos]) 
  // everytime the 2nd argument [todos] change, the localStorage.setItem(...) will run

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
<TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
</>

}