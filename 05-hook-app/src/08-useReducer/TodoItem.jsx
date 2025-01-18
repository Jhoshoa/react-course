import React from 'react'
import PropTypes from "prop-types"

const TodoItem = ( {todoItem} ) => {

    // console.log("TodoItem =>" + id);
  return (
    <li className='list-group-item d-flex justify-content-between'>
        <span className='align-self-center'>{todoItem.description}</span>
        <button className='btn btn-danger'>Borrar</button>
    </li>
  )
}

export default TodoItem

// TodoItem.propTypes = {
//     id: PropTypes.number.isRequired,
//     description: PropTypes.string.isRequired,
//     done: PropTypes.bool.isRequired,
// }
