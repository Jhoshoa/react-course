import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({ todos = [] }) => {

    //console.log("ingresando =>" + JSON.stringify(todos));

  return (
    <>
        <ul className='list-group'>
            {
                todos.length > 0 && 
                todos.map((item) => (
                    <TodoItem key={item.id} todoItem={item} />
                ))
            }
        </ul>
    </>
  )
}

export default TodoList
