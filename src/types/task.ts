export type Task = {
    id: number;
    title: string;
    category: string;
    completed: boolean;
};

export type ToDoListProps = {
    taskList: Task[];
};