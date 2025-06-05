import styles from './TaskDaySection.module.scss';
import { TaskDayHeader } from './TaskDayHeader';
import { TaskList } from '@/entities/task';

export const TaskDaySection = () => {
  return (
    <section className={styles.taskDaySection}>
      <TaskDayHeader date="5.08" finalTime="8:20" />
      <TaskList />
    </section>
  );
};