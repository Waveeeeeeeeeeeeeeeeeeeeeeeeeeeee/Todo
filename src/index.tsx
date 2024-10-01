import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import { ThemeProvider } from './providers/ThemeProvider/ThemeProvider';
import { TodoProvider } from './providers/TodoProvider/TodoProvider';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <React.StrictMode>
        <ThemeProvider>
            <TodoProvider>
                <App />
            </TodoProvider>
        </ThemeProvider>
    </React.StrictMode>
);
