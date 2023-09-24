import ToDo from "./components/todo";
import { Todo } from "@/types/todo";

import styles from "./todosStyles.module.css";

interface TodoProps {
  onRemoveTodo: (id: number) => void;
  todos: Todo[];
}

const ToDos = ({ todos, onRemoveTodo }: TodoProps) => {
  return (
    <div className={styles.container}>
      <ul className={styles.todoListContainer}>
        {todos.map((todo) => (
          <ToDo
            key={todo.id}
            id={todo.id}
            title={todo.title}
            description={todo.description}
            completed={todo.completed}
            onRemoveTodo={onRemoveTodo}
          />
        ))}
      </ul>
    </div>
  );
};

export default ToDos;
