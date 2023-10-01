"use client";
//types
import { type TodoType as ToDoProps } from "@/types/todo.type";
//styles
import styles from "./todoStyles.module.css";

interface Props extends ToDoProps {
  onRemoveTodo?: (id: number) => void;
  onCompleteTodo: (id: number) => void;
}

// if react 18 or above can use this typing
const ToDo: React.FC<Props> = ({ id, todo, completed, onRemoveTodo, onCompleteTodo }) => {
  return (
    <li
      className={styles.todoContainer}
      onClick={() => {
        onCompleteTodo(id);
      }}
    >
      <input type="checkbox" checked={completed} />
      <div>
        <h4>{id}</h4>
        <h3>{todo}</h3>
      </div>
    </li>
  );
};

export default ToDo;
