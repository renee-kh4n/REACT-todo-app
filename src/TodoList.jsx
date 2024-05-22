import { TodoItem } from "./TodoItem"

export function TodoList({todos, toggleTodo, deleteTodo}){
    return (<ul className="list">
    {/* everything inside {} is ran as a JS code */
    /* key is used to help react identify which item is being modified */}
    {todos.length == 0 && "No items"}
    {todos.map(todo =>{
      return (
      <TodoItem 
      key={todo.id} 
      {...todo} // does the same as id={todo.id}  completed={todo.completed}  title={todo.title}
    //   id={todo.id} 
    //   completed={todo.completed} 
    //   title={todo.title}

    toggleTodo={toggleTodo}
    deleteTodo={deleteTodo}
 
      />
      )
  
    })}
    
  </ul>)
}