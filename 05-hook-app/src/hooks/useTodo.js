import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
};

const useTodo = ( initialState = [] ) => {
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

    const handleDeleteTodo = ( id ) => {

        // console.log({id});
        dispach({
            type: '[TODO] Remove Todo',
            payload: id,
        })
    }

    const handleToggleTodo = ( id ) => {

        dispach({
            type: '[TODO] Toggle Todo',
            payload: id,
        })

        //console.log({todos});
    }

    const pendingTodosCount = todos.filter( todo => !todo.done).length;

    return {
        todos: todos,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo,
        todosCount: todos.length,
        pendingTodosCount: pendingTodosCount,
    }
}

export default useTodo
