import { Trash } from "lucide-react";

type Priority = "Urgente" | "Moyenne" | "Basse";
// test refus de commit / fork
type Todo = {
  id: number;
  text: string;
  priority: Priority;
};

type Props = {
  todo: Todo;
  onDelete: () => void;
  isSelected: boolean;
  onToggleSelect: (id: number) => void;
};

const TodoItem = ({ todo, onDelete, isSelected, onToggleSelect }: Props) => {
  return (
    <li className="p-3 hover:bg-gray-50 transition-colors">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            className="checkbox checkbox-primary checkbox-sm"
            checked={isSelected}
            onChange={() => onToggleSelect(todo.id)}
          />
          <span className="text-md font-medium">{todo.text}</span>
          <span
            className={`badge badge-sm ${
              todo.priority === "Urgente"
                ? "badge-error"
                : todo.priority === "Moyenne"
                ? "badge-warning"
                : "badge-success"
            }`}
          >
            {todo.priority}
          </span>
        </div>
        <button
          onClick={onDelete}
          className="btn btn-sm btn-ghost text-error hover:bg-error/10"
          aria-label="Supprimer la tâche"
        >
          <Trash className="w-4 h-4" />
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
