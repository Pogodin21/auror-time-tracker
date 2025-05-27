import styles from "./TaskCard.module.scss";

interface TaskCardProps {
    icon: string;
    alt: string;
    title: string;
    type: string;
}

export const TaskCard = ({ icon,  alt,  title, type }: TaskCardProps) => {
  return (
    <div className={styles.taskCard}>
      <img className={styles.icon} src={icon} alt={alt} />
      <div>
        <p className={styles.taskTitle}>{title}</p>
        <p className={styles.taskType}>{type}</p>
      </div>
    </div>
  );
};
