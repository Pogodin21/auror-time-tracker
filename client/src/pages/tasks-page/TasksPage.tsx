import styles from "./TasksPage.module.scss";
import { TaskDaySection } from "@/widgets/task-day-section/TaskDaySection";

export const TasksPage = () => {
  return (
    <main className={styles.main}>
      <TaskDaySection />
      <TaskDaySection />
    </main>
  );
};
