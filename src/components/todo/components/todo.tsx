"use client";
//types
import { type Todo as ToDoProps } from "@/types/todo";
//styles
import styles from "./todoStyles.module.css";

interface Props extends ToDoProps {
  onRemoveTodo: (id: number) => void;
}

// if react 18 or above can use this typing
const ToDo: React.FC<Props> = ({ id, title, description, completed, onRemoveTodo }) => {
  return (
    <li className={styles.todoContainer}>
      <input type="checkbox" checked={completed} onChange={() => {}} />
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </li>
  );
};

export default ToDo;
