import type { ToDoListProps, Category } from '../types/task';

export function ToDoLists({ taskList, onComplete, onDelete }: ToDoListProps) {
    const category: Record<Category, string> = { study: 'Estudos', person: 'Pessoal', job: 'Trabalho', completed: 'Finalizado', progressing: 'Ausente' };

    return (
        <div className="flex flex-col gap-2.5 relative m-5">
            {taskList.map((task) => (
                <div
                    key={task.id}
                    className="p-2 bg-(--forest) placeholder:text-(--stone) text-(--anti-flash-white) rounded-md focus:outline-2 outline-offset-2 outline-(--bangladesh-green) transition-all /*delay-150*/ duration-200 ease"
                >
                    <div className="flex flex-row justify-between w-full">
                        <div className="w-full text-(--frog)">
                            <b>{task.title}</b>
                            <p>{`(${category[task.category]})`}</p>
                        </div>
                        <div className="flex flex-row items-center gap-1.5 w-1/5 p-1">
                            <button
                                className="h-10 bg-(--frog) hover:bg-(--mountain-meadow) transition text-[#063d38] font-bold bonderad rounded-md p-2 cursor-pointer disabled:cursor-no-drop disabled:opacity-75"
                                type="button"
                                onClick={() => onComplete(task.id)}
                            >
                                {task.completed ? 'Reabrir' : 'Concluir'}
                            </button>

                            <button
                                className="h-10 bg-[#822236] hover:bg-[#5b1724] transition text-(--rich-black) font-bold bonderad rounded-md p-2 cursor-pointer disabled:cursor-no-drop disabled:opacity-75"
                                type="button"
                                onClick={() => onDelete(task.id)}
                            >
                                X
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
