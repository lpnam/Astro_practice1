import React from 'react'
import { ACTIONS } from './Count'

function Todo({ todo,dispatch }) {
  return (
    <div>
        <span style={{ color: todo.complete ? '#666':'#AAA' }}>{todo.name}</span>
        <button onClick={() => dispatch({ type: ACTIONS.TOGGLE_TODOS,payload: { id: todo.id }})} >Toggle</button>
        <button onClick={()=> dispatch({ type: ACTIONS.DELETE_TODOS, payload: { id: todo.id }})}>Delete</button>
    </div>
  )
}

export default Todo