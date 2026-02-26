import { useState } from 'react';

export default function FilterTasks() {
    const [filter, setFilter] = useState<string>();

    return (
        <div className="flex flex-col gap-2.5 relative m-5">
            <h1 className="text-(--bangladesh-green) font-bold text-2xl cursor-default">Filtrar:</h1>
            <select
                className="p-2 bg-(--forest) placeholder:text-[bg-amber-500] text-(--frog) rounded-md focus:outline-2 outline-offset-2 outline-(--bangladesh-green) transition-all duration-200 ease"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
            >
                <option id="category" value="all">
                    Todas
                </option>
                <optgroup label="Categorias">
                    <option value="study">Estudos</option>
                    <option value="person">Pessoal</option>
                    <option value="job">Trabalho</option>
                </optgroup>
                <optgroup label="Status">
                    <option value="completed">Finalizado</option>
                    <option value="progressing">Ausente</option>
                </optgroup>
            </select>
            <div className="block relative">
                <button className="bg-(--frog) hover:bg-(--mountain-meadow) transition text-(--bangladesh-green) font-bold bonderad w-1/2 rounded-md p-2 cursor-pointer">Filtrar</button>
            </div>
        </div>
    );
}
