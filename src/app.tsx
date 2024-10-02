import { useContext } from 'react';
import GlobalStyles from './assets/styles/global.styles';
import styled from 'styled-components';
import { ThemeType } from './types/theme.model';
import { ThemeContext } from './contexts/ThemeContext/ThemeContext';
import { ThemeToggler } from './ui/ThemeToggler/ThemeToggler';
import { AddTodo } from './functions/addTodo';
import { Todo } from './components/Todo/Todo';
import { TodoContext } from './contexts/TodoContext/TodoContext';

const AppContainer = styled.div<{ themeType: ThemeType }>`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0;
    margin: 0;
    transition: background-color 0.3s ease;
    box-sizing: border-box;

    @media (max-width: 768px) {
        padding: 10px;
    }
`;

// Wrapper for the Todo section
const TodoWrapper = styled.section<{ themeType: ThemeType }>`
    width: 100%;
    max-width: 800px;
    padding: 20px;
    background-color: ${props => (props.themeType === 'light' ? '#fff' : '#333')};
    border-radius: 12px;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    gap: 20px;
    transition: background-color 0.3s ease;
    box-sizing: border-box;

    @media (max-width: 1024px) {
        max-width: 700px;
        padding: 15px;
    }

    @media (max-width: 768px) {
        max-width: 90%;
        padding: 10px;
        gap: 15px;
    }

    @media (max-width: 480px) {
        max-width: 100%;
        padding: 5px;
        gap: 10px;
    }
`;

const InputWrapper = styled.div`
    width: auto;
    display: flex;
    align-items: center;
    flex-direction: row;
    gap: 10px;
    box-sizing: border-box;

    @media (max-width: 768px) {
        flex-direction: column;
        width: 100%;
        align-items: center;
        gap: 15px;
    }
`;

const TaskListWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: flex-start;
    width: 100%;
    box-sizing: border-box;

    @media (max-width: 768px) {
        gap: 8px;
        align-items: center;
    }

    @media (max-width: 480px) {
        gap: 5px;
    }
`;

const App: React.FC = () => {
    const themeContext = useContext(ThemeContext);
    const theme = themeContext?.theme;
    const todoContext = useContext(TodoContext);

    return (
        <AppContainer themeType={theme || 'light'}>
            <GlobalStyles theme={theme || 'light'} />
            <ThemeToggler />
            <TodoWrapper themeType={theme || 'light'}>
                <InputWrapper>
                    <AddTodo />
                </InputWrapper>
                <TaskListWrapper>
                    <Todo tasks={todoContext ? todoContext.todos : []} />
                </TaskListWrapper>
            </TodoWrapper>
        </AppContainer>
    );
};

export default App;
