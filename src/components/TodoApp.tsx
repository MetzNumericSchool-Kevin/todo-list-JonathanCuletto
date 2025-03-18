import AddTodo from "./AddTodo";

type TodoItem = {
    id: number,
    description: string
    done: boolean
}

export function TodoApp() {
    return (
        <>
        <div className="flex">
         
         <AddTodo />
        </div>
            
            <div className="my-5 flex-column gap-5 w-full text-left">
                {/* TODO ITEM version normal */}
                <div className="bg-indigo-300 w-full m-5 rounded-box p-3 flex">
                    <span className="pr-8">
                        <input type="checkbox" className="checkbox" />
                    </span>
                    <span className="flex-grow">
                        Acheter des oranges
                    </span>
                    <div>
                        <button className="btn btn-error btn-outline btn-xs">
                            X
                        </button>
                    </div>
                </div>

                {/* TODO Item version cochée */}
                <div className="bg-indigo-700 w-full m-5 rounded-box p-3 flex">
                    <span className="pr-8">
                        <input type="checkbox"  className="checkbox" />
                    </span>
                    <span className="flex-grow line-through">
                        Courir avec le fraté
                    </span>
                    <div>
                        <button className="btn btn-error btn-outline btn-xs">
                            X
                        </button>
                    </div>
                </div>

                <div className="bg-indigo-700 w-full m-5 rounded-box p-3 flex">
                    <span className="pr-8">
                        <input type="checkbox"  className="checkbox" />
                    </span>
                    <span className="flex-grow line-through">
                        Me faire défoncer à LoL ce jeu de merde
                    </span>
                    <div>
                        <button className="btn btn-error btn-outline btn-xs">
                            X
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}