import { useEffect, useState } from 'react';
import CreateToDo from './components/CreateToDo';
import FilterTasks from './components/FilterTasks';
import SearchTasks from './components/SearchTasks';
import { ToDoLists } from './components/ToDoLists';
import { db } from './db/db';
import type { Task } from './types/task';

export default function App() {
    const [search, setSearch] = useState<string>('');
    const [filter, setFilter] = useState<string>('all');
    const [loading, setLoading] = useState(true);
    const [tasks, setTasks] = useState<Task[]>([]);

    useEffect(() => {
        const loadTasks = async () => {
            const allTasks = await db.tasks.toArray();
            setTasks(allTasks);
            setLoading(false);
        };

        loadTasks();
    }, []);

    const handleCreateTask = async (task: Omit<Task, 'id'>) => {
        const id = await db.tasks.add(task);
        setTasks((prevTasks) => [...prevTasks, { ...task, id }]);
    };

    const filteredTasks = tasks
        .filter((task) => task.title.toLowerCase().includes(search.toLowerCase()))
        .filter((task) => {
            if (filter === 'all') return true;

            if (filter === 'completed') return task.completed;

            if (filter === 'progressing') return !task.completed;

            return task.category === filter;
        });

    const handleComplete = async (id: number) => {
        const task = tasks.find((t) => t.id === id);
        if (!task) return;
        await db.tasks.update(id, { completed: !task.completed });
        setTasks((prevTasks) => prevTasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task)));
    };

    const handleDelete = async (id: number) => {
        await db.tasks.delete(id);
        setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
    };

    return (
        <div className="bg-(--pine) m-auto my-15 p-3.75 flex justify-center flex-col w-200 border-2 rounded-md border-(--dark-green)">
            <h1 className="text-3xl font-bold text-center subpixel-antialiased font-stretch-extra-expanded cursor-default">Lista de Tarefas</h1>
            <CreateToDo onCreate={handleCreateTask} />
            <hr className="h-px border-0 bg-(--dark-green)"></hr>
            <SearchTasks search={search} onSearch={setSearch} />
            <hr className="h-px border-0 bg-(--dark-green)"></hr>
            <FilterTasks filter={filter} onFilterChange={setFilter} />
            {loading && (
                <>
                    <hr className="h-px border-0 bg-(--dark-green)" />
                    <div className="inline-block m-auto mt-4 h-8 w-8 animate-spin rounded-full border-4 border-solid border-(--bangladesh-green) border-e-transparent" role="status"></div>
                </>
            )}
            {!loading && tasks.length !== 0 && (
                <>
                    <hr className="h-px border-0 bg-(--dark-green)" />
                    <ToDoLists taskList={filteredTasks} onDelete={handleDelete} onComplete={handleComplete} />
                </>
            )}
        </div>
    );
}
