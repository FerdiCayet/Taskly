import CreateToDo from './components/CreateToDo';
import FilterTasks from './components/FilterTasks';
import SearchTasks from './components/SearchTasks';

export default function App() {
    return (
        <div className="bg-(--pine) m-auto my-15 p-3.75 flex justify-center flex-col w-200 border-2 rounded-md border-(--dark-green)">
            <h1 className="text-3xl font-bold text-center subpixel-antialiased font-stretch-extra-expanded cursor-default">Lista de Tarefas</h1>
            <CreateToDo />
            <hr className="h-px border-0 bg-(--dark-green)"></hr>
            <SearchTasks />
            <hr className="h-px border-0 bg-(--dark-green)"></hr>
            <FilterTasks />
        </div>
    );
}
