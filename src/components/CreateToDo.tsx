export default function CreateToDo() {
    return (
        <div className="flex flex-col gap-2.5 relative m-5">
            <h1 className="text-(--bangladesh-green) font-bold text-2xl cursor-default">Criar Tarefa:</h1>
            <input className="p-2 bg-(--forest) placeholder:text-(--stone) text-(--anti-flash-white) rounded-md focus:outline-2 outline-offset-2 outline-(--bangladesh-green) transition-all /*delay-150*/ duration-200 ease" type="text" id="task" name="task" placeholder="Digite o Título" />
            <select className="p-2 bg-(--forest) placeholder:text-[bg-amber-500] text-(--frog) rounded-md focus:outline-2 outline-offset-2 outline-(--bangladesh-green) transition-all duration-200 ease">
                <option id="category" defaultValue="none" selected disabled>
                    Seleciona uma categoria
                </option>
                <option defaultValue="study">Estudos</option>
                <option defaultValue="person">Pessoal</option>
                <option defaultValue="job">Trabalho</option>
            </select>
            <div className="block relative">
                <button className="bg-(--frog) hover:bg-(--mountain-meadow) transition text-(--bangladesh-green) font-bold bonderad w-1/2 rounded-md p-2 cursor-pointer">Criar Tarefa</button>
            </div>
        </div>
    );
}
