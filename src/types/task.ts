export type Category = "study" | "person" | "job" | "completed" | "progressing";

export type Task = {
    id: number;
    title: string;
    category: Category;
    completed: boolean;
};

export type ToDoListProps = {
    taskList: Task[];
};