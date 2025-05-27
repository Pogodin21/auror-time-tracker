import styles from "./NavBar.module.scss";

export const NavBar = () => {
  return (
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
  );
};
