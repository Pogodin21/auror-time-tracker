import PlayIcon from "@/shared/assets/icons/play.svg";
import ColorPoint from "@/shared/assets/icons/color-point.svg?react";

import styles from "./TaskListItem.module.scss";

interface TaskListItemProps {
  task: {
    color: string;
    title: string;
    project: string;
    time: string;
  };
}

export const TaskListItem = ({ task }: TaskListItemProps) => {
  return (
    <li className={styles.taskDayItem}>
      <div className={styles.taskDayItem__info}>
        <ColorPoint
          className={styles.taskDayItem__color}
          style={{ color: task.color }}
        />

        <div>
          <p className={styles.taskDayItem__title}>Folio F5</p>
          <p className={styles.taskDayItem__project}>Work</p>
        </div>
      </div>
      <div className={styles.taskDayItem__actions}>
        <img
          className={styles.taskDayItem__play}
          src={PlayIcon}
          alt="play button"
        />
        <span className={styles.taskDayItem__time}>6:04</span>
      </div>
    </li>
  );
};
