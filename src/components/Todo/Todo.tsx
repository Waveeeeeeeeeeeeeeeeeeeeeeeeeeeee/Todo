import React, { useContext, useState } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext/ThemeContext';
import { TodoContext } from '../../contexts/TodoContext/TodoContext';
import { Task } from './Task/Task';
import { ITodo } from '../../types/todo.model';
import { v4 as uuidv4 } from 'uuid';
import { StyledButton } from '../../ui/StyledButton/StyledButton';

export const Todo: React.FC<ITodo> = (props: unknown): JSX.Element | null => {
    const todoContext = useContext(TodoContext);
    const themeContext = useContext(ThemeContext);
    const todos = todoContext?.todos;

    const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all'); // Состояние для фильтра

    if (!todos || todos.length === 0) {
        return <p>На текущий момент, задач нет!</p>; // Сообщение, если задач нет
    }

    const filteredTodos = todos.filter(todo => {
        if (filter === 'all') return true;
        if (filter === 'active') return todo.status === 'Active';
        if (filter === 'completed') return todo.status === 'Completed';
        return null;
    });

    if (!themeContext) {
        return null; // Если по каким-то причинам контекст недоступен
    }

    const { theme } = themeContext;

    // Удаление задачи через контекст
    const deleteTask = (id: string) => {
        todoContext?.deleteTodo?.(id); // Вызов функции удаления из контекста
    };

    // Редактирование задачи через контекст
    const editTask = (id: string, newContent: string) => {
        todoContext?.editTodo?.(id, newContent); // Вызов функции редактирования из контекста
    };

    const toggleStatus = (id: string) => {
        todoContext?.toggleStatus?.(id); // Вызов функции удаления из контекста
    };

    return (
        <>
            <StyledButton
                name='Все задачи'
                type='submit'
                value='Все задачи'
                content='Все задачи'
                onClick={() => setFilter('all')}
                themeType={theme}
            />
            <StyledButton
                name='Активные задачи'
                type='submit'
                value='Активные задачи'
                content='Активные задачи'
                onClick={() => setFilter('active')}
                themeType={theme}
            />
            <StyledButton
                name='Выполненные задачи'
                type='submit'
                value='Выполненные задачи'
                content='Выполненные задачи'
                onClick={() => setFilter('completed')}
                themeType={theme}
            />
            <ul>
                {filteredTodos.map(todo => (
                    <Task
                        status={todo.status}
                        content={todo.content}
                        id={todo.id}
                        onDelete={deleteTask}
                        onEdit={editTask}
                        onToggleStatus={toggleStatus}
                        key={uuidv4()} // Используем id задачи в качестве ключа
                    />
                ))}
            </ul>
        </>
    );
};
