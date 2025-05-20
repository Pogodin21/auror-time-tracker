import { ReactNode } from 'react';
import styles from './Container.module.scss';

interface Props {
  children: ReactNode;
}

export const Container = ({ children }: Props) => {
  return <div className={styles.wrapper}>{children}</div>;
};
