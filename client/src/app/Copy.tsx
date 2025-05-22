import { Container } from "@/shared/ui/Container/Container";
import styles from "./App.module.scss";
import menuIcon from "@/shared/assets/icons/menu-alt-1.svg";
import projectIcon from "@/shared/assets/icons/clipboard-list.png";
import taskIcon from "@/shared/assets/icons/check-circle.png";
import timer from "@/shared/assets/icons/timer.svg";

const App = () => {
  return (
    <Container>
      <header className={styles.header}>
        <img className={styles.icon} src={menuIcon} alt="Menu" />
        <h1 className={styles.appTitle}>Auror Time</h1>
        
      </header>
      <nav className={styles.navBar}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <button className={styles.navButton}>Track</button>
            </li>
            <li className={styles.navItem}>
              <button className={styles.navButton}>Tasks</button>
            </li>
            <li className={styles.navItem}>
              <button className={styles.navButton}>Projects</button>
            </li>
          </ul>
        </nav>

      <main>
        

        <section className={styles.mainSection}>

          <div className={styles.taskInfo}>
            <div className={styles.taskCard}>
              <img className={styles.icon} src={projectIcon} alt="Project"/>
              <div>
                <p className={styles.taskTitle}>Auror Time</p>
                <p className={styles.taskType}>Project</p>
              </div>
            </div>
            <div className={styles.taskCard}>
              <img className={styles.icon} src={taskIcon} alt="Task"/>
              <div>
                <p className={styles.taskTitle}>Create UI</p>
                <p className={styles .taskType}>Task</p>
              </div>
            </div>
          </div>

          <div className={styles.timerWrapper}>
            <div className={styles.timer}>
              <div>
                <div className={styles.timerDisplay}>00:00:00</div>
                <div className={styles.taskTitle}>Create UI</div>
              </div>
            </div>
          </div>

          <div className={styles.toggleWrapper}>
            <div className={styles.toggleSwitch}>
              <img className={styles.icon} src={timer} alt="switch"></img>
              <p className={styles.toggleStatus}>Off</p>
            </div>
          </div>
        </section>
      </main>
    </Container>
  );
};

export default App;
