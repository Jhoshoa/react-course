import React from 'react'
import useForm from '../hooks/useForm'

const TodoForm = ({ onNewTodo }) => {

    const { description, onInputChange, onResetForm} = useForm({
        description: '',
    });

    const onFormSubmit = (event) => {
        event.preventDefault();

        if ( description.length <= 1 ) return;

        const newTodo = {
            id: new Date().getTime(),
            done: false,
            description: description,
        }

        onNewTodo(newTodo);

        onResetForm();
    }

  return (
    <>
        <form onSubmit={onFormSubmit}>
            <h4>Agregar TODO</h4>
            <hr />
            <input 
                className='form-control'
                type='text'
                placeholder='Que hay que hacer?'
                name='description'
                value={ description }
                onChange={ onInputChange }
            />
            <button
                type='submit'
                className='btn btn-outline-primary m-2'
            >
                Agregar
            </button>
        </form>
    </>
  )
}

export default TodoForm
