import { useContext, useState } from 'react';
import { OnChangeEventType } from '../types/events/change.event';
import { OnClickEventType } from '../types/events/click.event';
import { InputType } from '../types/input.model';
import { ThemeContext } from '../contexts/ThemeContext/ThemeContext';
import { TodoContext } from '../contexts/TodoContext/TodoContext';
import { StyledInput } from '../ui/StyledInput/StyledInput';
import { StyledButton } from '../ui/StyledButton/StyledButton';

export const AddTodo = (props: unknown) => {
    const [data, setData] = useState('');
    const addTodoContext = useContext(TodoContext); // Получаем функцию добавления задач
    const addTodo = addTodoContext?.addTodo;
    const themeContext = useContext(ThemeContext);

    if (!themeContext) {
        return null; // Если по каким-то причинам контекст недоступен
    }

    const { theme } = themeContext;

    const onChange: OnChangeEventType = e => {
        e.preventDefault();
        setData(e.target.value);
    };

    const onAddTodo: OnClickEventType = e => {
        e.preventDefault();
        if (addTodo !== undefined) {
            if (data.trim().length >= 3 && data.trim().length <= 40) {
                addTodo(data.trim()); // Добавляем задачу в контекст
                setData(''); // Очищаем инпут после добавления
            }
        }
    };
    return (
        <>
            <StyledInput
                type={InputType.Text}
                themeType={theme}
                name='addTodo'
                value={data}
                placeholder='todo'
                onChange={onChange}
                minLength={3}
                maxLength={40}
            />

            <StyledButton
                name='Add todo'
                themeType={theme}
                type='submit'
                onClick={onAddTodo}
                content='Добавить задачу'
            ></StyledButton>
        </>
    );
};
