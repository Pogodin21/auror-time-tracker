import styles from './Header.module.scss';
import menuIcon from '@/shared/assets/icons/menu-alt-1.svg';

export const Header = () => {
  return (
    <header className={styles.header}>
      <img className={styles.icon} src={menuIcon} alt="Menu" />
      <h1 className={styles.appTitle}>Auror Time</h1>
    </header>
  );
};
