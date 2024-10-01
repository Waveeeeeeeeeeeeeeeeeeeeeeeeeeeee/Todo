import styled from 'styled-components';
import { ThemeType } from '../../types/theme.model';
import { Text } from '../../components/Input/Text/Text';

export const StyledInput = styled(Text)<{ themeType: ThemeType }>`
    width: 70%;
    max-width: 100%;
    padding: 10px 15px;
    font-size: 16px;
    border-radius: 5px;
    border: 1px solid ${props => (props.themeType === 'light' ? '#ccc' : '#444')};
    background-color: ${props => (props.themeType === 'light' ? '#fff' : '#333')};
    color: ${props => (props.themeType === 'light' ? '#000' : '#f7f7f7')};
    transition: border-color 0.3s ease, background-color 0.3s ease;
    outline: none;

    &::placeholder {
        color: ${props => (props.themeType === 'light' ? '#aaa' : '#888')};
    }

    &:focus {
        border-color: ${props => (props.themeType === 'light' ? 'rgb(0, 86, 179)' : '#777')};
    }
`;
