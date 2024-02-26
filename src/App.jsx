import { useState } from 'react'
import TodoInput from './TodoInput'
import TodoList from './TodoList'

export default function App() {
  const [todos, setTodos] = useState([])

  let addList = (inputText) => {
    setTodos([...todos, inputText])
  }

  const deleteListItem = (key) => {
    const newTodos = [...todos]
    newTodos.splice(key,1)
    setTodos([...newTodos])
  }

  return (
    <div className="main-container">
      <TodoInput
        addList={addList}
      />
      {todos.map((listitem, i) => {
        return (<TodoList
          key={i}
          item={listitem}
          deleteListItem = {deleteListItem}
        />)

      })
      }

    </div>
  )
}