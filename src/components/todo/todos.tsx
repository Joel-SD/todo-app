"use client";
import { useCallback, useEffect, useState } from "react";
//styles
import styles from "./todosStyles.module.css";
//componets
import ToDo from "./components/todo/todo";
//type
import { TodoType } from "@/types/todo.type";
//redux
import { useAppDispatch, useAppSelector } from "../../hooks/store";
import { getTodosData, setTodos } from "../../store/todoSlice/todoSlice";
import { todo } from "node:test";

const ToDos = () => {
  const dispatch = useAppDispatch();
  const todoData = useAppSelector((state) => state.todosSlice.todos);

  useEffect(() => {
    if (todoData.length < 1 && dispatch) dispatch(getTodosData());
  }, []);

  const handleComplete = useCallback(
    (id: number) => {
      const newTodos = todoData.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
      dispatch(setTodos(newTodos));
    },
    [todoData]
  );

  return (
    <div className={styles.container}>
      <h1>Todo list </h1>
      <ul className={styles.todoListContainer}>
        {todoData.map((todo) => (
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
