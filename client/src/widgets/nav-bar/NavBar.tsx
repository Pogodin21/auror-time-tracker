import styles from "./NavBar.module.scss";
import { NavLink } from "react-router-dom";
import { RoutePath } from "@/app/providers/router";

export const NavBar = () => (
  <nav className={styles.navBar}>
    <ul className={styles.navList}>
      <li className={styles.navItem}>
        <NavLink
          to={RoutePath.track}
          className={({ isActive }) =>
            `${styles.navButton} ${isActive ? styles.active : ""}`
          }
        >
          Track
        </NavLink>
      </li>
      <li className={styles.navItem}>
        <NavLink
          to={RoutePath.tasks}
          className={({ isActive }) =>
            `${styles.navButton} ${isActive ? styles.active : ""}`
          }
        >
          Tasks
        </NavLink>
      </li>
      <li className={styles.navItem}>
        <NavLink
          to={RoutePath.projects}
          className={({ isActive }) =>
            `${styles.navButton} ${isActive ? styles.active : ""}`
          }
        >
          Projects
        </NavLink>
      </li>
    </ul>
  </nav>
);

