import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { removeTodo } from '../features/todo/todoSlice';

function Todos() {
    const todos = useSelector((state) => state.todos);

    const dispatch = useDispatch();

    return (
        <>
            <div>Todos</div>
            {todos.map((todo) => (
                <li key={todo.id}>
                    <div>{todo.text}</div>
                    <button onClick={() => dispatch(removeTodo(todo.id))}>
                        Remove
                    </button>
                </li>
            ))}
        </>
    );
}

export default Todos;
