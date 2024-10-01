import { ThemeType } from '../../types/theme.model';

export interface IThemeContext {
    theme: ThemeType;
    toggleTheme: () => void;
}
