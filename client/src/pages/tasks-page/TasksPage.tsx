import styles from "./TasksPage.module.scss";

export const TasksPage = () => {
  return (
    <main className={styles.main}>
      <section className={styles.taskDaySection}>
        <header className={styles.taskDayHeader}>
          <span className={styles.taskDayHeader__date}>5.08</span>
          <span className={styles.taskDayHeader__finalTime}>8:20</span>
        </header>
        <ul className={styles.taskDayList}>
          <li className={styles.taskDayItem}>
            <div className={styles.taskDayItem__color} />
            <div>
              <p className={styles.taskDayItem__title}>Folio F5</p>
              <p className={styles.taskDayItem__project}>Work</p>
            </div>
            <div className={styles.taskDayItem__actions}>
              <img className={styles.taskDayItem__play} alt="play button" />
              <span className={styles.taskDayItem__time}>6:04</span>
            </div>
          </li>
        </ul>
      </section>
    </main>
  );
};
