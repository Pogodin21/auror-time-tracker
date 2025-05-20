import { Container } from "@/shared/ui/Container/Container";
import styles from './App.module.scss';
import menuIcon  from "@/shared/assets/icons/menu-alt-1.png";
import projectIcon from "@/shared/assets/icons/clipboard-list.png";
import taskIcon from "@/shared/assets/icons/check-circle.png"

const App = () => {
  return (
    <Container>
      <header className={styles.header}>
        <img src={menuIcon} alt="Menu" className={styles.menuIcon} />
        <h1 className={styles.title}>Auror Time</h1>
      </header>
      <main>
        <nav className={styles.tabs}>
          <button>Track</button>
          <button>Tasks</button>
          <button>Projects</button>
        </nav>
        <section className={styles.section}>
          <div className={styles.infoCards}>
            <div className={styles.card}>
              <img src={projectIcon} alt='Project'></img>
              <span>
                <div>Auror Time</div>
                <div>Project</div>
              </span>
            </div>
            <div className={styles.card}>
              <img src={taskIcon} alt='Project'></img>
              <div>
                <div>Create UI</div>
                <div>Task</div>
              </div>
            </div>
          </div>
          
        </section>
       
       
      </main>
    </Container>
  );
};

export default App;
