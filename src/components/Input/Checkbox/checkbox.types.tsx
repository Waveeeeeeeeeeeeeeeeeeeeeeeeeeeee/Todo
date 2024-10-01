import { InputHTMLAttributes } from 'react';
import { IInput } from '../input.type';
import { InputType } from '../../../types/input.model';

export interface ICheckboxInput extends IInput<InputHTMLAttributes<HTMLInputElement>> {
    type: InputType.Checkbox;
    checked: boolean;
}
