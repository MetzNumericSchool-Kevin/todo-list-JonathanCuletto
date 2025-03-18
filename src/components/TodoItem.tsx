
type Props = {
    id: number;
    description: string;
    checked: boolean;
    onRemove: (id: number) => void;
    onToggleChecked: (id: number) => void;
  };
  
  function TodoItem({id, description, checked, onRemove, onToggleChecked}: Props) {
    
    return (
    <div className={`w-full m-5 rounded-box p-3 flex ${checked ? 'bg-purple-500' : 'bg-indigo-300'}`}>
        <span className="pr-8">
            <input type="checkbox" className="checkbox" checked={checked} onChange={() => onToggleChecked(id)} />
        </span>
        <span className={`flex-grow && ${checked? "line-through" : ""}`}>
            {description}
        </span>
        <div>
            <button className="btn btn-error btn-outline btn-xs"
            onClick={() => onRemove(id)}>
                X
            </button>
        </div>
    </div>          
    );
  }
  
  export default TodoItem;