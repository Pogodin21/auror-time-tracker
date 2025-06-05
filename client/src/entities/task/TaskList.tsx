import { TaskListItem } from './TaskListItem';
import styles from './TaskList.module.scss';

const tasks = [
  { id: 1, title: 'Folio F5', project: 'Work', time: '6:04', color: '#63D1E2' },
  { id: 2, title: 'Folio F6', project: 'Personal', time: '3:15', color: '#FFAA33' },
  { id: 3, title: 'Folio F7', project: 'Study', time: '1:30', color: '#FF3344' },
];

export const TaskList = () => {
  return (
    <ul className={styles.taskList}>
      {tasks.map((task) => (
        <TaskListItem key={task.id} task={task} />
      ))}
    </ul>
  );
};