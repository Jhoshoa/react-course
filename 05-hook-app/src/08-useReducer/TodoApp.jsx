import React from 'react'
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import useTodo from '../hooks/useTodo';

const TodoApp = () => {

    const {todos, handleDeleteTodo, handleNewTodo, handleToggleTodo, pendingTodosCount, todosCount} = useTodo();   

  return (
    <>
        <h1>Todo App: {todosCount}, <small>pendientes: { pendingTodosCount }</small> </h1>
        <hr />

        <div className='row'>
            <div className="col-7">
                <TodoList todos={todos} onDeleteTodo={ handleDeleteTodo } onToggleTodo={handleToggleTodo} />
            </div>

            <div className="col-5">
                <TodoForm onNewTodo={handleNewTodo} />
            </div>
        </div>

        
    </>
  )
}

export default TodoApp
