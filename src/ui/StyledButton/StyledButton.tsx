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
    box-sizing: border-box;

    /* Адаптивный дизайн для мобильных устройств */
    @media (max-width: 768px) {
        font-size: 12px;
        padding: 8px 16px;
        width: 150px;
    }

    @media (max-width: 480px) {
        font-size: 10px;
        padding: 6px 12px;
        width: 120px;
    }
`;
