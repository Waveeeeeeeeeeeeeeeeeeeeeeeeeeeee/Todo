type TaskStatusType = 'Active' | 'Completed' | 'Pending';

export interface ITask {
    status: TaskStatusType;
    key: string;
    content: string;
    onEdit?: (id: string, newContent: string) => void;
    onDelete?: (id: string) => void;
    onToggleStatus?: (id: string) => void;
    id?: string;
    themeType?: string;
}
