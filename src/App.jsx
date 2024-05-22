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
<NewTodoForm addTodo={addTodo}/>
<h1 className="header">My To Do List</h1>
<ul className="list">
  {/* everything inside {} is ran as a JS code */
  /* key is used to help react identify which item is being modified */}
  {todos.length == 0 && "No items"}
  {todos.map(todo =>{
    return (<li key={todo.id}>  
    
      <label>
        <input 
        type="checkbox" 
        checked={todo.completed}
        onChange={e => toggleTodo(todo.id, e.target.checked)}
        />
        {todo.title}
      </label>
      {/* pass a funtion via "() =>" not the result via functionName*/}
      <button onClick={() => deleteTodo(todo.id)} className="btn btn-danger">Delete</button>
    </li>)

  })}
  
</ul>
</>

}