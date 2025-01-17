const initialState = [{
    id: 1,
    todo:'Recolectar la piedra del Alma',
    done: false,
}];

const todoReducer = ( state = initialState, action = {}) => {

    if ( action.type === '[TODO] add todos' ) {
        return [ ...state, action.payload ]
    }
    return state;
};

let todos = todoReducer();

// if I want to add a new object into the initialState, one way is
// using the .push() which will work, but it is not good because this MUTATES the object
// and it will not render in React, DON'T DO THAT

// todos.push({
//     id: 2,
//     todo: 'Recolectar la piedra del poder',
//     done: false,
// });

// BETTER WAY TO DO IT using the REDUCER
const newTodo = {
    id: 2,
    todo: 'Recolectar la piedra del poder',
    done: false,
};

const addTodoAction = {
    type: '[TODO] add todos',
    payload: newTodo,
}

todos = todoReducer( todos, addTodoAction );

console.log({ state: todos });