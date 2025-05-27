import styles from "./ToggleSwitch.module.scss";
import timer from "@/shared/assets/icons/timer.svg"

export const ToggleSwitch = () => {
  return (
    <div className={styles.toggleWrapper}>
      <div className={styles.toggleSwitch}>
        <img className={styles.icon} src={timer} alt="switch"></img>
        <p className={styles.toggleStatus}>Off</p>
      </div>
    </div>
  );
};
