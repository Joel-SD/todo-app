"use client";
import { useState } from "react";
//styles
import styles from "./page.module.css";
//components
import ToDos from "@/components/todo/todos";
//mock data
import { _todos } from "@/_mock/_todos";

export default function Home() {
  const [todos, setTodos] = useState(_todos);

  const handleRemove = (id: number) => {
    console.log(id);
    const newTodos = _todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };
  return (
    <main className={styles.main}>
      <h1>Lista de To-dos</h1>
      <ToDos onRemoveTodo={handleRemove} todos={todos} />
    </main>
  );
}
