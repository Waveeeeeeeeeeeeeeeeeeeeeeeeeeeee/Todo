export enum InputType {
    Text = 'text',
    Number = 'number',
    Checkbox = 'checkbox',
}

export interface IInputModel {
    text: InputType.Text;
    number: InputType.Number;
    checkbox: InputType.Checkbox;
}
