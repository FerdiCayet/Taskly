import { useState } from 'react';

export default function SearchTasks() {
    const [search, setSearch] = useState<string>('');

    return (
        <div className="flex flex-col gap-2.5 relative m-5">
            <h1 className="text-(--bangladesh-green) font-bold text-2xl cursor-default">Pesquisar:</h1>
            <input
                className="p-2 bg-(--forest) placeholder:text-(--stone) text-(--anti-flash-white) rounded-md focus:outline-2 outline-offset-2 outline-(--bangladesh-green) transition-all /*delay-150*/ duration-200 ease"
                type="text"
                id="task"
                name="task"
                onChange={(e) => setSearch(e.target.value)}
                value={search}
                placeholder="Digite para pesquisar..."
            />
        </div>
    );
}
