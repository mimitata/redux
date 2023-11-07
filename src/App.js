import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {addTodo, removeTodo} from "./Actions/action"
import { useState } from 'react'

const App = () => {
  const [counter, setcouter] = useState(0);
  const [todo, setTodo] = useState("");
  const todos = useSelector(state => state.todos)
  const dispatch = useDispatch();
  const todoSubmitHandler = () => {
    if (todo !== "") {
      dispatch(addTodo(counter, todo));
      setcouter(counter + 1);
      setTodo("")
    }
  };
  return (
    <>
    <h1>todos</h1>
    <div className='todo'>
      <input
      type='text'
      value={todo}
      onChange={(e) => setTodo(e.target.value)}
      />
    </div>
    <button onClick={todoSubmitHandler}>Add todo</button>
    <div className='todos'>
      <ul>
        {todos?.map((todo) => (
          <li key={todo.id}>
            <p>{todo.task}</p>
            <button onClick={() => dispatch(removeTodo(todo.id))}>Remove</button>
            </li>
        ))  }
      </ul>

    </div>
    </>
  )
}

export default App
