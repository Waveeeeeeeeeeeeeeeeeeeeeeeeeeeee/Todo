import React, { useState, useEffect } from 'react';
import { TodoContext } from '../../contexts/TodoContext/TodoContext';
import { IProviderProps } from '../../types/provider.model';
import { ITask } from '../../types/task.model';
import { v4 as uuidv4 } from 'uuid';

export const TodoProvider: React.FC<IProviderProps> = ({ children }) => {
    // Загружаем задачи из localStorage при загрузке компонента
    const [todos, setTodos] = useState<ITask[]>(() => {
        const storedTodos = localStorage.getItem('todos');
        return storedTodos ? JSON.parse(storedTodos) : []; // Если в localStorage есть задачи, загружаем их, иначе пустой массив
    });

    // Сохраняем задачи в localStorage при каждом изменении массива todos
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const deleteTodo = (id: string) => {
        setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
    };

    const editTodo = (id: string, newContent: string) => {
        setTodos(prevTodos => prevTodos.map(todo => (todo.id === id ? { ...todo, content: newContent } : todo)));
    };

    const toggleStatus = (id: string) => {
        setTodos(prevTodos =>
            prevTodos.map(todo =>
                todo.id === id ? { ...todo, status: todo.status === 'Completed' ? 'Active' : 'Completed' } : todo
            )
        );
    };

    const addTodo = (newTodo: string) => {
        const newTask: ITask = {
            key: uuidv4(),
            content: newTodo,
            status: 'Active',
            id: uuidv4(),
        };
        setTodos(prevTodos => [...prevTodos, newTask]);
    };

    return (
        <TodoContext.Provider value={{ todos, addTodo, deleteTodo, editTodo, toggleStatus }}>
            {children}
        </TodoContext.Provider>
    );
};
