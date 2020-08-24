import React from 'react';

const Todos = ({ todos , deleteTodo }) => {
    const todoList = todos.length > 0 ? (
        todos.map(todo => {
            return (
                <div className="collection-item" key={todo.id}>
                    <span className="todo-text" onClick={() => {deleteTodo(todo.id)}}>{todo.content}</span>
                </div>
            )
        })
    ) : (
            <p className="center">you dont have any to dos left! yay ;)</p>
        );
    return (
        <div className="todos collection">
            {todoList}
        </div>
    )
}

export default Todos;