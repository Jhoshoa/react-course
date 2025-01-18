import React, { useEffect, useReducer } from 'react'
import { todoReducer } from './todoReducer';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

const initialState = [
    // {
    //     id: new Date().getTime(),
    //     description: 'Recolectar la piedra del alma',
    //     done: false,
    // },
    // {
    //     id: new Date().getTime() * 3,
    //     description: 'Recolectar la piedra del tiempo',
    //     done: false,
    // }
];

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
};

const TodoApp = () => {
    
    const [todos, dispach] = useReducer(todoReducer, initialState, init);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify( todos ));
    }, [todos])

    const handleNewTodo = ( todo ) => {

        const action = {
            type: '[TODO] Add Todo',
            payload: todo,
        }

        dispach( action );
        console.log({todo});
    }

  return (
    <>
        <h1>Todo App: 10, <small>pendientes: 2</small> </h1>
        <hr />

        <div className='row'>
            <div className="col-7">
                <TodoList todos={todos} />
            </div>

            <div className="col-5">
                <TodoForm onNewTodo={handleNewTodo} />
            </div>
        </div>

        
    </>
  )
}

export default TodoApp
