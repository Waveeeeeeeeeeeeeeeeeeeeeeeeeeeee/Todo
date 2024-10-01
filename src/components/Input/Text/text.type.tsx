import { InputHTMLAttributes } from 'react';
import { IInput } from '../input.type';
import { InputType } from '../../../types/input.model';

export interface ITextInput extends IInput<InputHTMLAttributes<HTMLInputElement>> {
    type: InputType.Text;
}
