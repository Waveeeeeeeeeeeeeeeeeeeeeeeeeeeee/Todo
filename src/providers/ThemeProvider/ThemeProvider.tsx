import { useState } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext/ThemeContext';
import { ThemeType } from '../../types/theme.model';
import { IProviderProps } from '../../types/provider.model';

export const ThemeProvider: React.FC<IProviderProps> = ({ children }) => {
    const [theme, setTheme] = useState<ThemeType>('light');

    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};
