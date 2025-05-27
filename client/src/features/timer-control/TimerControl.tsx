import styles from './TimerControl.module.scss'

export const TimerControl = () => {
  return (
    <div className={styles.timerWrapper}>
      <div className={styles.timer}>
        <div>
          <div className={styles.timerDisplay}>00:00:00</div>
          <div className={styles.taskTitle}>Create UI</div>
        </div>
      </div>
    </div>
  );
};
