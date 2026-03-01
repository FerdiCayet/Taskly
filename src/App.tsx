import { useState } from 'react';
import CreateToDo from './components/CreateToDo';
import FilterTasks from './components/FilterTasks';
import SearchTasks from './components/SearchTasks';
import { ToDoLists } from './components/ToDoLists';
import type { Task } from './types/task';

export default function App() {
    const [search, setSearch] = useState<string>('');
    const [filter, setFilter] = useState<string>('all');

    const [tasks, setTasks] = useState<Task[]>([
        { id: 1, title: 'Estudar Python', category: 'job', completed: false },
        { id: 2, title: 'Construir no sistema', category: 'study', completed: false }
    ]);

    const handleCreateTask = (newTask: Task) => {
        setTasks((prevTasks) => [newTask, ...prevTasks]);
    };

    const filteredTasks = tasks.filter((task) =>
        task.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="bg-(--pine) m-auto my-15 p-3.75 flex justify-center flex-col w-200 border-2 rounded-md border-(--dark-green)">
            <h1 className="text-3xl font-bold text-center subpixel-antialiased font-stretch-extra-expanded cursor-default">Lista de Tarefas</h1>
            <CreateToDo onCreate={handleCreateTask} />
            <hr className="h-px border-0 bg-(--dark-green)"></hr>
            <SearchTasks search={search} onSearch={setSearch} />
            <hr className="h-px border-0 bg-(--dark-green)"></hr>
            <FilterTasks filter={filter} onFilterChange={setFilter} />
            <hr className="h-px border-0 bg-(--dark-green)"></hr>
            <ToDoLists taskList={filteredTasks} />
        </div>
    );
}
