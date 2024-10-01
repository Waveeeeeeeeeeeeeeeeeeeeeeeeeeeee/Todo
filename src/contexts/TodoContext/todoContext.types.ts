import { ITask } from '../../types/task.model';

export interface ITodoContext {
    todos: ITask[];
    addTodo: (arg: string) => void;
    deleteTodo: (id: string) => void;
    editTodo: (id: string, newContent: string) => void;
    toggleStatus: (id: string) => void;
}
