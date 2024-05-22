export function TodoList(){
    return (<ul className="list">
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
    
  </ul>)
}