import React from 'react'
import { useMemo } from 'react'
import List from './List'
import { filterTodos } from './utils'

function TodoList({ todos, theme, tab }) {
    const visibleTodos = useMemo(
        () => filterTodos(todos, tab),
        [todos, tab]
    )
  return (
    <div className={theme}>
        <p><b>Note: <code>List</code> is artificially slowed down!</b></p>
        <ul>
            {visibleTodos.map(todo => (
                <li key={todo.id}>
                    {todo.completed ? 
                    <s>{todo.text}</s> :
                    todo.text
                }
                </li>
            ))}
        </ul>
    </div>
  )
}
export default TodoList