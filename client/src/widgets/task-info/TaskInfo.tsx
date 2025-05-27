import styles from "./TaskInfo.module.scss";
import projectIcon from "@/shared/assets/icons/clipboard-list.png";
import taskIcon from "@/shared/assets/icons/check-circle.png";
import { TaskCard } from "@/entities/task-card";

export const TaskInfo = () => {
  return (
    <div className={styles.taskInfo}>
      <TaskCard
        icon={projectIcon}
        alt={"Project"}
        title={"Auror Time"}
        type={"Project"}
      />
      <TaskCard
        icon={taskIcon}
        alt={"Task"}
        title={"Create UI"}
        type={"Task"}
      />
    </div>
  );
};
