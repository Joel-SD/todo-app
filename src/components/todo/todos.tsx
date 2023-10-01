"use client";
import { useCallback, useEffect, useState } from "react";
import ToDo from "./components/todo/todo";
import styles from "./todosStyles.module.css";
import { TodoType } from "@/types/todo.type";

const ToDos = () => {
  const [todos, setTodos] = useState<TodoType[]>([]);

  const getTodoData = async () => {
    await fetch("https://dummyjson.com/todos")
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "fetch data");
        setTodos(data.todos);
        return data;
      })
      .catch((err) => {
        console.log(err, "error fetch data");
      });
  };

  useEffect(() => {
    getTodoData();
  }, []);

  const handleRemove = (id: number) => {
    console.log(id);
    const newTodos = todos?.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const handleComplete = useCallback(
    (id: number) => {
      const newTodos = todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
      setTodos(newTodos);
    },
    [todos]
  );

  return (
    <div className={styles.container}>
      <h1>Todo list </h1>
      <ul className={styles.todoListContainer}>
        {todos &&
          todos.map((todo) => (
            <ToDo
              key={todo.id}
              id={todo.id}
              todo={todo.todo}
              completed={todo.completed}
              userId={todo.userId}
              // onRemoveTodo={handleRemove}
              onCompleteTodo={handleComplete}
            />
          ))}
      </ul>
    </div>
  );
};

export default ToDos;
