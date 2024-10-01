import { createContext } from 'react';
import { ITodoContext } from './todoContext.types';

export const TodoContext = createContext<ITodoContext | undefined>(undefined);
