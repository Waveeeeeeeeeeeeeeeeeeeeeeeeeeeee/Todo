import styled from 'styled-components';
import { ThemeType } from '../../types/theme.model';
import { Button } from '../../components/Button/Button';

export const StyledButton = styled(Button)<{ themeType: ThemeType }>`
    padding: 10px 20px;
    border: none;
    border-radius: 8px;
    background-color: ${props => (props.themeType === 'light' ? '#007BFF' : '#555')};
    color: ${props => (props.themeType === 'light' ? '#fff' : '#ddd')};
    cursor: pointer;
    font-size: 14px;
    width: 180px;
    transition: background-color 0.3s ease;
    &:hover {
        background-color: ${props => (props.themeType === 'light' ? '#0056b3' : '#777')};
    }
`;
