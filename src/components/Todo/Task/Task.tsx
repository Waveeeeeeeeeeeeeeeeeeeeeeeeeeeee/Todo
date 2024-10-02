import { useState, useContext } from 'react';
import { StyledTaskItem } from '../../../ui/StyledListItem/StyledListItem';
import { ThemeContext } from '../../../contexts/ThemeContext/ThemeContext';
import { InputType } from '../../../types/input.model';
import { ITask } from '../../../types/task.model';
import { Checkbox } from '../../Input/Checkbox/Checkbox';
import styled from 'styled-components';
import { StyledButton } from '../../../ui/StyledButton/StyledButton';
import { StyledInput } from '../../../ui/StyledInput/StyledInput';

const StyledButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    gap: 20px;
    box-sizing: border-box;

    @media (max-width: 768px) {
        flex-direction: column;
        justify-content: center;
        gap: 10px;
        width: auto;
    }
`;

const StyledContent = styled.span<{ isCompleted: boolean }>`
    text-decoration: ${props => (props.isCompleted ? 'line-through' : 'none')};
    transition: background-color 0.3s ease;
    width: 200px;
`;

export const Task: React.FC<ITask> = ({
    content,
    id,
    status,
    onDelete,
    onEdit,
    onToggleStatus,
}: ITask): JSX.Element | null => {
    const [isEditing, setIsEditing] = useState(false); // Режим редактирования
    const [newContent, setNewContent] = useState(content); // Новое содержание для редактирования

    // Теперь состояние галочки синхронизировано со статусом задачи из контекста
    const isCompleted = status === 'Completed';

    const themeContext = useContext(ThemeContext);

    if (!themeContext) {
        return null; // Если по каким-то причинам контекст недоступен
    }

    const { theme } = themeContext;

    const handleCheckboxChange = () => {
        if (id && onToggleStatus) {
            onToggleStatus(id); // Обновляем статус задачи через контекст
        }
    };

    const handleDelete = () => {
        if (id && onDelete) onDelete(id); // Удаление задачи
    };

    const handleEdit = () => {
        setIsEditing(true); // Включаем режим редактирования
    };

    const handleSaveEdit = () => {
        if (id && onEdit) onEdit(id, newContent); // Сохраняем изменения
        setIsEditing(false); // Выходим из режима редактирования
    };

    const handleCancelEdit = () => {
        setIsEditing(false); // Отмена редактирования
        setNewContent(content); // Возвращаем старое содержимое
    };

    return (
        <StyledTaskItem
            id={id?.toString()}
            themeType={theme}
            style={{
                backgroundColor: isCompleted ? '#d4edda' : 'inherit', // светло-зеленый цвет для завершенных задач
            }}
        >
            <Checkbox type={InputType.Checkbox} checked={isCompleted} onChange={handleCheckboxChange} />

            {isEditing ? (
                <>
                    <StyledInput
                        type={InputType.Text}
                        value={newContent}
                        onChange={e => setNewContent(e.target.value)}
                        themeType={theme}
                    />
                    <StyledButton
                        name='Save'
                        type='submit'
                        value='Save'
                        content='Сохранить'
                        onClick={handleSaveEdit}
                        themeType={theme}
                    />
                    <StyledButton
                        name='Cancel'
                        type='submit'
                        value='Cancel'
                        content='Отменить'
                        onClick={handleCancelEdit}
                        themeType={theme}
                    />
                </>
            ) : (
                <>
                    <StyledContent isCompleted={isCompleted}>{content}</StyledContent>
                    <StyledButtonContainer>
                        <StyledButton
                            name='Edit'
                            type='submit'
                            value='Edit'
                            content='Редактировать'
                            onClick={handleEdit}
                            themeType={theme}
                        />
                        <StyledButton
                            name='Delete'
                            type='submit'
                            value='Delete'
                            content='Удалить'
                            onClick={handleDelete}
                            themeType={theme}
                        />
                    </StyledButtonContainer>
                </>
            )}
        </StyledTaskItem>
    );
};
