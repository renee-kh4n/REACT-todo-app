import "./styles.css"

export default function App(){
  // return "Hello World"

  // cannot return more than one element
  //solution: wrap content in a fragment <></>
  
  return <><form className="new-item-form">
  <div className="form-row">
    <label htmlFor="item">New Item</label>
    <input type="text" id="item"/>
  </div>
  <button className="btn">Add</button>
</form>
<h1 className="header">My To Do List</h1></>
}