import React, { useState } from 'react'
import { useTodo } from '../Context/TodoContext'

function TodoForm() {
    const [todo1, setTodo1] = useState("")
    
    const {addTodo} = useTodo()

    const add = (e) => {
      e.preventDefault()

      if (!todo1) return

      addTodo({ todo: todo1, completed: false})
      setTodo1("")
    }

  return (
      <form onSubmit={add}  className="flex">
          <input
              type="text"
              placeholder="Write Todo..."
              className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
              value={todo1}
              onChange={(e) => setTodo1(e.target.value)}
          />
          <button type="submit" className="px-3 py-1 text-white bg-green-600 rounded-r-lg shrink-0">
              Add
          </button>
      </form>
  );
}

export default TodoForm;