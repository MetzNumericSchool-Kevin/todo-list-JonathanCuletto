import { useState } from "react";

type AddTodoProps = {
  onAddTodo: (description: string) => void;
};

function AddTodo({ onAddTodo }: AddTodoProps) {
  const [description, setDescription] = useState<string>(''); 

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(event.target.value); 
  };

  const handleAddClick = () => {
    if (description.trim() === '') return; 
    onAddTodo(description); 
    setDescription('');
  };
    return (
      <>
        <label className="input input-bordered flex items-center gap-2">
          <input type="text" className="grow" placeholder="Ajouter une tâche" value={description} onChange={handleInputChange}/>
        </label>
        <button className="btn btn-primary" onClick={handleAddClick}>+</button>
      </>
    );
  }
  
  export default AddTodo;