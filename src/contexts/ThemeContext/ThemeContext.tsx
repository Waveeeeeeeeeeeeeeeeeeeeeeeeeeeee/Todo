import { createContext } from 'react';
import { IThemeContext } from './themeContext.types';

export const ThemeContext = createContext<IThemeContext | undefined>(undefined);
