import React, { useState } from 'react';

interface AddTodoFormProps {
    onAdd: (description: string, deadline: string) => void;
}

export const AddTodoForm: React.FC<AddTodoFormProps> = ({ onAdd }) => {
    const [description, setDescription] = useState('');
    const [deadline, setDeadline] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!description.trim()) return;

        onAdd(description, deadline);
        setDescription('');
        setDeadline('');
    };

    return (
        <form className="add-todo-form" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="What needs to be done?"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="todo-input"
            />
            <input
                type="date"
                value={deadline}
                onChange={(e) => setDeadline(e.target.value)}
                className="date-input"
            />
            <button type="submit" disabled={!description.trim()}>
                Add Task
            </button>
        </form>
    );
};
