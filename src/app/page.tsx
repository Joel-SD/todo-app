//styles
import styles from "./page.module.css";
//components
import ToDos from "@/components/todo/todos";
//mock data
import { _todos } from "@/_mock/_todos";

export default function Home() {
  return (
    <main className={styles.main}>
      <ToDos />
    </main>
  );
}
