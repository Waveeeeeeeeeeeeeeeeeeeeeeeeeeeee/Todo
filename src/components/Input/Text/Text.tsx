import { Input } from '../Input';

import { ITextInput } from './text.type';

export const Text = (props: ITextInput) => {
    return <Input {...props} />;
};
