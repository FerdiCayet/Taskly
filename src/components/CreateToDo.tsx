import { useState } from 'react';
import type { Task, Category } from '../types/task';

type CreateToDoProps = { onCreate: (task: Task) => void };

export default function CreateToDo({ onCreate }: CreateToDoProps) {
    const [title, setTitle] = useState<string>('');
    const [currentCategory, setCurrentCategory] = useState<Category | ''>('');

    const isButtonEnabled = title.length > 0 && currentCategory.length > 0;

    return (
        <div className="flex flex-col gap-2.5 relative m-5">
            <h1 className="text-(--bangladesh-green) font-bold text-2xl cursor-default">Criar Tarefa:</h1>
            <input
                className="p-2 bg-(--forest) placeholder:text-(--stone) text-(--anti-flash-white) rounded-md focus:outline-2 outline-offset-2 outline-(--bangladesh-green) transition-all /*delay-150*/ duration-200 ease"
                type="text"
                id="task"
                name="task"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Digite o Título"
            />
            <select
                className="p-2 bg-(--forest) placeholder:text-[bg-amber-500] text-(--frog) rounded-md focus:outline-2 outline-offset-2 outline-(--bangladesh-green) transition-all duration-200 ease"
                name="selectedCategory"
                value={currentCategory}
                onChange={(e) => setCurrentCategory(e.target.value as Category)}
            >
                <option value="" selected disabled>
                    Seleciona uma categoria
                </option>
                <option value="study">Estudos</option>
                <option value="person">Pessoal</option>
                <option value="job">Trabalho</option>
            </select>
            <div className="block relative">
                <button
                    className="bg-(--frog) enabled:hover:bg-(--mountain-meadow) transition text-(--bangladesh-green) font-bold bonderad w-1/2 rounded-md p-2 cursor-pointer disabled:cursor-no-drop disabled:opacity-75"
                    type="button"
                    disabled={!isButtonEnabled}
                    onClick={() => {
                        if (!currentCategory) return;

                        console.log('Tarefa criada:', { title, currentCategory });
                        onCreate({ title, category: currentCategory, completed: false });

                        setTitle('');
                        setCurrentCategory('');
                    }}
                >
                    Criar Tarefa
                </button>
            </div>
        </div>
    );
}
