import styles from './Header.module.scss';

interface HeaderProps {
  icon: string;
  alt: string;
  title: string;
}

export const Header = ({ icon, alt, title }: HeaderProps) => {
  return (
    <header className={styles.header}>
      <img className={styles.icon} src={icon} alt={alt} />
      <h1 className={styles.appTitle}>{title}</h1>
    </header>
  );
};
