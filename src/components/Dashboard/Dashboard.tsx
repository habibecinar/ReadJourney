import { ReactNode } from 'react';
import styles from './Dashboard.module.css';

interface DashboardProps {
  children: ReactNode;
}

const Dashboard = ({ children }: DashboardProps) => {
  return (
    <aside className={styles.dashboard}>
      {children}
    </aside>
  );
};

export default Dashboard;
