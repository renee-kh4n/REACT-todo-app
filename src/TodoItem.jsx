export function TodoItem({completed, id, title, toggleTodo, deleteTodo}){
    return (<li>  
      
        <label>
          <input 
          type="checkbox" 
          checked={completed}
          onChange={e => toggleTodo(id, e.target.checked)}
          />
          {title}
        </label>
        {/* pass a funtion via "() =>" not the result via functionName*/}
        <button 
        onClick={() => deleteTodo(id)} 
        className="btn btn-danger">Delete</button>
      </li>)
}