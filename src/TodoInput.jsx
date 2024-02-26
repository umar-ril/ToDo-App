import  {useState} from 'react'
import './index.css'

export default function Todolist(props){
  const [newTodo,setNewTodo] = useState("")
  

    return (
      <div className="container">
        <h1>TODO LIST</h1>
           <input 
           type='text' 
           placeholder="Enter new task here..."
           onChange={e => {setNewTodo(e.target.value)}}
           value = {newTodo}
           />
           <button 
           className="btn"
           onClick={
            () => {
              props.addList(newTodo)
              setNewTodo("")
            }
           }
           >ADD</button>
           <br/>
      </div>
    )
}