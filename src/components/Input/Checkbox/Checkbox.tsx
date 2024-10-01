import { Input } from '../Input';
import { ICheckboxInput } from './checkbox.types';

export const Checkbox = (props: ICheckboxInput) => {
    return <Input {...props}></Input>;
};
