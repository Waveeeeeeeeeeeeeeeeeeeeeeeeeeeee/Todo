import { ButtonHTMLAttributes } from 'react';
import { OnClickEventType } from '../../types/events/click.event';
import { ThemeType } from '../../types/theme.model';

export interface IButton<T extends ButtonHTMLAttributes<HTMLButtonElement>> {
    name: string;
    type: T['type'];
    content: string | JSX.Element;
    themeType?: ThemeType;
    value?: string | undefined;
    onClick?: OnClickEventType;
}
