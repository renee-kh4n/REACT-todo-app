import { useState } from "react"

export function NewTodoForm(){

    const [newItem, setNewItem] = useState("")
  
    const [todos, setTodos] = useState([]);

    function handleSubmit(e){
        e.preventDefault(); //prevents refreshing the page
    
        if (newItem === "") return
        // MOVE TO APP.JSX:
        // setTodos(currentTodoList =>  {
        //   return [...currentTodoList, 
        //     {id: crypto.randomUUID(), 
        //       title: newItem, 
        //       completed: false}]
        // })
        addTodo(newItem)
    
        setNewItem("")
      }

    return (
        <form onSubmit={handleSubmit} className="new-item-form">
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
    )
}