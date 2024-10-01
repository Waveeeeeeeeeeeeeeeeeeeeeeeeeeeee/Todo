import { InputHTMLAttributes } from 'react';
import { OnChangeEventType } from '../../types/events/change.event';

export interface IInput<T extends InputHTMLAttributes<HTMLInputElement>> {
    type: T['type'];
    onChange: OnChangeEventType;
    name?: string;
    themeType?: string;
    value?: string | number;
    placeholder?: string;
    minLength?: number;
    maxLength?: number;
}
