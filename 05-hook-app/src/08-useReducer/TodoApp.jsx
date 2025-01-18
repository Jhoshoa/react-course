import React, { useReducer } from 'react'
import { todoReducer } from './todoReducer';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

const initialState = [
    {
        id: new Date().getTime(),
        description: 'Recolectar la piedra del alma',
        done: false,
    },
    {
        id: new Date().getTime() * 3,
        description: 'Recolectar la piedra del tiempo',
        done: false,
    }
]

const TodoApp = () => {
    
    const [todo, dispach] = useReducer(todoReducer, initialState);

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
                {/* <ul className='list-group'>
                    {
                        todo.map(() => (
                            <li className='list-group-item d-flex justify-content-between'>
                                <span className='align-self-center'>Item 1</span>
                                <button className='btn btn-danger'>Borrar</button>
                            </li>
                        ))
                    }
                </ul> */}

                <TodoList todos={todo} />
            </div>

            <div className="col-5">
                {/* <h4>Agregar TODO</h4>
                <hr />
                <input 
                    className='form-control'
                    type='text'
                    placeholder='Que hay que hacer?'
                />

                <button
                    type='submit'
                    className='btn btn-outline-primary m-2'
                >
                    Agregar
                </button> */}

                <TodoForm onNewTodo={handleNewTodo} />
            </div>
        </div>

        
    </>
  )
}

export default TodoApp
