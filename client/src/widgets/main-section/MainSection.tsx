import styles from "./MainSection.module.scss";
import projectIcon from "@/shared/assets/icons/clipboard-list.png";
import taskIcon from "@/shared/assets/icons/check-circle.png";
import { TimerControl } from "@/features/timer-control";
import { ToggleSwitch } from "@/features/toggle-switch";

export const MainSection = () => {
  return (
    <section className={styles.mainSection}>
      <div className={styles.taskInfo}>
        <div className={styles.taskCard}>
          <img className={styles.icon} src={projectIcon} alt="Project" />
          <div>
            <p className={styles.taskTitle}>Auror Time</p>
            <p className={styles.taskType}>Project</p>
          </div>
        </div>
        <div className={styles.taskCard}>
          <img className={styles.icon} src={taskIcon} alt="Task" />
          <div>
            <p className={styles.taskTitle}>Create UI</p>
            <p className={styles.taskType}>Task</p>
          </div>
        </div>
      </div>
      <TimerControl />
      <ToggleSwitch />
    </section>
  );
};
