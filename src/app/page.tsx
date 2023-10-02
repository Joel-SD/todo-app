"use client";
//styles
import styles from "./page.module.css";
//components
import ToDos from "@/components/todo/todos";
//redux
import { Provider } from "react-redux";
import { store } from "../store";

export default function Home() {
  return (
    <Provider store={store}>
      <main className={styles.main}>
        <ToDos />
      </main>
    </Provider>
  );
}
