import React, { useState } from 'react';
import { TodoItem, type Todo } from './TodoItem';
import { AddTodoForm } from './AddTodoForm';

export const TodoList: React.FC = () => {
    const [todos, setTodos] = useState<Todo[]>([]);

    const toggleTodo = (id: string) => {
        setTodos(prev => prev.map(todo =>
            todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
        ));
    };

    const addTodo = (description: string, deadline: string) => {
        const newTodo: Todo = {
            id: crypto.randomUUID(),
            description,
            isDone: false,
            deadline: deadline ? new Date(deadline).toISOString() : undefined,
        };
        setTodos(prev => [newTodo, ...prev]);
    };

    return (
        <div className="todo-list-container">
            <AddTodoForm onAdd={addTodo} />

            <div className="todos-wrapper">
                {todos.length === 0 ? (
                    <div className="empty-state">
                        <p>No tasks yet. Add one above! ✨</p>
                    </div>
                ) : (
                    todos.map(todo => (
                        <TodoItem key={todo.id} todo={todo} onToggle={toggleTodo} />
                    ))
                )}
            </div>
        </div>
    );
};
