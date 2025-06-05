import styles from './TaskDayHeader.module.scss';

export const TaskDayHeader = ({ date, finalTime }) => {
  return (
    <header className={styles.taskDayHeader}>
      <span className={styles.date}>{date}</span>
      <span className={styles.finalTime}>{finalTime}</span>
    </header>
  );
};