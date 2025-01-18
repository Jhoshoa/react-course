import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({ todos = [], onDeleteTodo, onToggleTodo }) => {

    //console.log("ingresando =>" + JSON.stringify(todos));

  return (
    <>
        <ul className='list-group'>
            {
                todos.length > 0 && 
                todos.map((item) => (
                    <TodoItem 
                        key={item.id}
                        todoItem={item}
                        onDeleteTodo={ onDeleteTodo }
                        onToggleTodo={onToggleTodo}
                    />
                ))
            }
        </ul>
    </>
  )
}

export default TodoList
