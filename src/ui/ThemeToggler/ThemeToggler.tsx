import React, { useContext } from 'react';
import styled from 'styled-components';
import { ThemeContext } from '../../contexts/ThemeContext/ThemeContext';
import { ThemeType } from '../../types/theme.model';
import { Button } from '../../components/Button/Button';
import { FaSun, FaMoon } from 'react-icons/fa';

const ThemeTogglerButton = styled(Button)<{ themeType: ThemeType }>`
    background: none;
    color: ${props => (props.themeType === 'light' ? '#000' : '#fff')};
    border: none;
    padding: 10px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 10px; // Отступ между иконкой и текстом
    svg {
        color: ${props => (props.themeType === 'light' ? 'rgb(68, 68, 68)' : 'yellow')};
        font-size: 1.5rem;
        margin: 0 5px;

        /* Анимация при наведении */
        &:hover {
            transform: scale(1.1);
            transition: transform 0.2s ease;
        }
    }
`;

export const ThemeToggler: React.FC = (props: unknown) => {
    const themeContext = useContext(ThemeContext);

    if (!themeContext) {
        return null; // Если по каким-то причинам контекст недоступен
    }

    const { theme, toggleTheme } = themeContext;

    return (
        <div>
            <ThemeTogglerButton
                themeType={theme} // Передаем текущую тему для стилизации
                onClick={toggleTheme}
                name='ThemeToggler'
                type='submit'
                content={theme === 'light' ? <FaMoon /> : <FaSun />}
            ></ThemeTogglerButton>
        </div>
    );
};
