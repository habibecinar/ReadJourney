import { NavLink } from 'react-router-dom';
import { ROUTES } from '@utils/constants';
import styles from './Header.module.css';

interface UserNavProps {
  currentPath: string;
}

const UserNav = ({ currentPath }: UserNavProps) => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        <li>
          <NavLink
            to={ROUTES.RECOMMENDED}
            className={`${styles.navLink} ${currentPath === ROUTES.RECOMMENDED ? styles.active : ''}`}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to={ROUTES.LIBRARY}
            className={`${styles.navLink} ${currentPath === ROUTES.LIBRARY ? styles.active : ''}`}
          >
            My Library
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default UserNav;
