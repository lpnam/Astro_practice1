import React, { useState, useReducer } from 'react'
import Todo from './Todo'

export const ACTIONS = {
    ADD_TODOS: 'add-todos',
    TOGGLE_TODOS: 'toggle-todos',
    DELETE_TODOS: 'delete-todos'
}

const reducer = (todos, action) => {
    switch (action.type) {
        case ACTIONS.ADD_TODOS:
            return [...todos, todoNew(action.payload.name)]
        case ACTIONS.TOGGLE_TODOS:
            return  todos.map(todo => {
                if (todo.id === action.payload.id) {
                    return {...todo, complete: !todo.complete}
                }
                return todo
            })
        case ACTIONS.DELETE_TODOS:
            return todos.filter(todo => todo.id !== action.payload.id)
        default:
            return todos
    }  
}

const todoNew = (name) => {
    return {id: Date.now(), name: name, complete: false}
}

const CountNumber = () => {
    const [todos, dispatch] = useReducer(reducer, [])
    const [name, setName] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch({type: ACTIONS.ADD_TODOS, payload: { name: name }}) //pass agurment here with "payload"(any name)
        setName('')
    }

    console.log(todos);

    return (
        <>
            <form style={{border: '1px splid red'}} onSubmit={handleSubmit}>
                <input type="text"
                       value={name}
                       onChange={e => setName(e.target.value)} 
                />
            </form>

            {todos.map((todo) => {
                return <Todo key={todo.id}
                             todo={todo}
                             dispatch={dispatch}
                       />
            })}
        </>
    );
}

export default CountNumber;
