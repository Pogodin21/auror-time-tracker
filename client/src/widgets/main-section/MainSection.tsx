import styles from "./MainSection.module.scss";
import { TimerControl } from "@/features/timer-control";
import { ToggleSwitch } from "@/features/toggle-switch";
import { TaskInfo } from "../task-info";

export const MainSection = () => {
  return (
    <section className={styles.mainSection}>
      <TaskInfo />
      <TimerControl />
      <ToggleSwitch />
    </section>
  );
};
