import { createGlobalStyle } from 'styled-components';
import { ThemeType } from '../../types/theme.model';

const GlobalStyles = createGlobalStyle<{ theme: ThemeType }>`
  body {
    background-color: ${props => (props.theme === 'light' ? '#fff' : '#333')};
    color: ${props => (props.theme === 'light' ? '#000' : '#fff')};
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    font-size: 14px;
    box-sizing: border-box;
  }
`;

export default GlobalStyles;
