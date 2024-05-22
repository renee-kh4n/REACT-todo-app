import { useState } from "react"
import "./styles.css"

export default function App(){
  // return "Hello World"

  //default value //immutable, can't redeclare
  const [newItem, setNewItem] = useState("")
  //setNewItem("blahblah") will cause an infinite loop// reloads the whole app everytime it encounters this update

  const [todos, setTodos] = useState([]);
  //rerender the app every time we have a new input/TODOs; place them inside of useState()

  // cannot return more than one element
  //solution: wrap content in a fragment <></>
  
  function handleSubmit(e){
    e.preventDefault(); //prevents refreshing the page

    setTodos(currentTodoList =>  {
      return [...currentTodoList, 
        {id: crypto.randomUUID(), 
          title: newItem, 
          completed: false}]
    })

    setNewItem("")
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

  return <><form onSubmit={handleSubmit} className="new-item-form">
  <div className="form-row">
    <label htmlFor="item">New Item</label>
    {/* onChange allows you to type on the input field */}
    <input 
    value={newItem} 
    onChange={e => setNewItem(e.target.value) } type="text" 
    id="item"/>
  </div>
  <button className="btn">Add</button>
</form>
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