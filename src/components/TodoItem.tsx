import React from 'react';
import { format } from 'date-fns';

export interface Todo {
    id: string;
    description: string;
    isDone: boolean;
    deadline?: string; // ISO string
}

interface TodoItemProps {
    todo: Todo;
    onToggle: (id: string) => void;
}

export const TodoItem: React.FC<TodoItemProps> = ({ todo, onToggle }) => {
    const isOverdue = todo.deadline && new Date(todo.deadline) < new Date() && !todo.isDone;

    return (
        <div className={`todo-item ${todo.isDone ? 'done' : ''} ${isOverdue ? 'overdue' : ''}`}>
            <label className="checkbox-container">
                <input
                    type="checkbox"
                    checked={todo.isDone}
                    onChange={() => onToggle(todo.id)}
                />
                <span className="checkmark"></span>
            </label>

            <div className="todo-content">
                <p className="todo-description">{todo.description}</p>

                {todo.deadline && (
                    <span className="todo-deadline">
                        {isOverdue && <span className="warning-icon">⚠️ </span>}
                        Due: {format(new Date(todo.deadline), 'PP')}
                    </span>
                )}
            </div>
        </div>
    );
};
