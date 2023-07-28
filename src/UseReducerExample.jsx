import { useReducer, useState } from "react";
import Todo, { newTodo } from "./Todo";

export const ACTIONS = {
    ADD_TODO: 'add-todo',
    TOGGLE_TODO: 'toggle-todo',
    DELETE_TODO: 'delete-todo',
};

/*
 * Reducers allow us to manage more complex state, and/or do more complex things with it. Also, since the state can only
 * be updated via the single reducer function, it's easier to keep track of all the possible things that can be done to
 * the state.
 *
 * The reducer function takes two arguments: the current state, and the action that was dispatched.
 */
function reducer(todos, action) {
    switch (action.type) {
        case ACTIONS.ADD_TODO:
            return [...todos, newTodo(action.payload.name)];
        case ACTIONS.TOGGLE_TODO:
            return todos.map(todo => {
                if (todo.id === action.payload.id) {
                    return { ...todo, complete: !todo.complete };
                }

                return todo;
            });
        case ACTIONS.DELETE_TODO:
            return todos.filter(todo => todo.id !== action.payload.id);
        default:
            // Alternatively, we could throw an error here
            return todos;
    }
}

export default function UseReducerExample() {
    /*
     * Similar to useState, useReducer returns an array with two elements. The first is the current state, and the
     * second is the dispatch function. We can call this dispatch function anywhere we want to update the state. It
     * takes a single argument, which is the action to dispatch. The action is an object with a type property, which
     * tells the reducer what we're trying to do, and then any other properties required to perform the action. A common
     * practice is to wrap these other properties in a payload object.
     */
    const [todos, dispatch] = useReducer(reducer, []);
    const [name, setName] = useState('');

    function handleSubmit(e) {
        // Prevent the page from refreshing on submit
        e.preventDefault();
        dispatch({
            type: ACTIONS.ADD_TODO,
            payload: { name: name },
        });
        setName('');
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>Add todo</label>
                <input type="text" value={name} onChange={e => setName(e.target.value)}/>
            </form>
            <h2>Todos</h2>
            {todos.map(todo => {
                /*
                 * Another advantage of reducers is that we can pass the single dispatch function into any component
                 * that needs to manage the state, rather than needing a separate prop for each action.
                 */
                return <Todo key={todo.id} todo={todo} dispatch={dispatch} />
            })}
        </>
    );
}
