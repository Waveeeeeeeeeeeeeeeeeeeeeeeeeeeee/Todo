import { InputHTMLAttributes } from 'react';
import { IInput } from './input.type';

export const Input = <T extends InputHTMLAttributes<HTMLInputElement>>(props: IInput<T>) => {
    return <input {...props}></input>;
};
