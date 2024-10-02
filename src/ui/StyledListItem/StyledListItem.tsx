import styled from 'styled-components';
import { ThemeType } from '../../types/theme.model';

export const StyledTaskItem = styled.li<{ themeType: ThemeType }>`
    display: flex;
    align-items: center;
    padding: 12px;
    border-radius: 8px;
    background-color: ${props => (props.themeType === 'light' ? '#fafafa' : '#444')};
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    color: ${props => (props.themeType === 'light' ? '#000' : '#fff')};
    transition: all 0.3s ease;
    gap: 20px;
    margin-bottom: 20px;
    box-sizing: border-box;

    width: 100%;
    & .task-content {
        text-decoration: line-through;
        flex-grow: 1;
    }

    & .task-actions {
        display: flex;
        gap: 10px;
    }
`;
